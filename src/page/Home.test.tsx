import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe('testing Home page', () => {
    it('testing params from react-router dom', () => {
        const routes = [
            {
                path: "/home/:id",
                element: <Home />,
            },
        ];

        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/home/1?abc=sadsad&cde=asdsa"],
            initialIndex: 1,
        });


        render(<RouterProvider router={router} />)
        const text = screen.getByText(1);
        expect(text).toBeInTheDocument()
    })
})