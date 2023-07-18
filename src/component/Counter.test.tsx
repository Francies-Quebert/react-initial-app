import { render, screen, logRoles, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Counter } from './Counter';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';

const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

describe('testing redux in Counter Component', () => {
    it('should render the Couter Component', async () => {
        render(<Provider store={store}><Counter /></Provider>);

        await waitFor(() => {
            const user1 = screen.getByText('Chelsey Dietrich');
            const user2 = screen.getByText('Clementina DuBuque');
            expect(user1).toBeInTheDocument();
            expect(user2).toBeInTheDocument();
            const alluser = screen.getAllByRole('user');
            expect(alluser).toHaveLength(2);
        });
    })

})