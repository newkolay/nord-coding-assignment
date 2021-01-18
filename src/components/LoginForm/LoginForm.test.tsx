import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "../../utils/test-utils";
import LoginForm from "./LoginForm";

const loginUrl = "https://playground.tesonet.lt/v1/tokens";

const server = setupServer(
	rest.get(loginUrl, (req, res, ctx) => res(ctx.json({ token: "egwgwegweg" })))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("handles server error", async () => {
	server.use(rest.get(loginUrl, (req, res, ctx) => res(ctx.status(500))));

	render(<LoginForm />);

	fireEvent.click(screen.getByText("Login"));

	await waitFor(() => screen.getByRole("alert"));

	expect(screen.getByRole("alert")).toBeInTheDocument();
});
