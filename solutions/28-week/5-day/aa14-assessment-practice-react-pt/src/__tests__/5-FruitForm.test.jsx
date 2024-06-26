import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter, createBrowserRouter, createMemoryRouter,
         BrowserRouter } from 'react-router-dom';
import FruitForm from '../components/FruitForm';
import fruits from '../mockData/fruits.json';

vi.mock('../components/FruitsIndex', () => {
  return {
    default: () => <>Fruits Index</>
  }
});

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual, // use actual React Router for everything but createBrowserRouter
    createBrowserRouter: vi.fn(),
    BrowserRouter: vi.fn()
  }
});

const initializeRouter = async (path) => {
  vi.resetModules();
  createBrowserRouter.mockImplementation((routes) => {
    return createMemoryRouter(routes, {
      initialEntries: [path]
    });
  });
  BrowserRouter.mockImplementation((props) => {
    return MemoryRouter({...props, initialEntries: [path]});
  });
  return (await import("../App")).default
}

const consoleSpy = vi.spyOn(global.console, 'log').mockImplementation();

describe('(17 points) FruitForm', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it ('(4 points) should have a controlled input for Name that shows "Name must be 3 or more characters" error if name is too short', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    expect(nameInput).toHaveValue('');

    // Initial blank form should trigger error
    expect(screen.getByText(/Name must be 3 or more characters/)).toBeInTheDocument();
    expect(screen.queryByText(/Name must be 20 characters or less/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Name already exists/)).not.toBeInTheDocument();

    // Error should disappear as user types
    await user.type(nameInput, 'Plum');
    expect(nameInput).toHaveValue('Plum');
    expect(screen.queryByText(/Name must be 3 or more characters/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Name must be 20 characters or less/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Name already exists/)).not.toBeInTheDocument();
  });

  it ('(1 point) should show a "Name must be 20 characters or less" error if name is too long', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await user.type(nameInput, 'This name is much more than 20 characters long');
    expect(screen.getByText(/Name must be 20 characters or less/)).toBeInTheDocument();
    expect(screen.queryByText(/Name must be 3 or more characters/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Name already exists/)).not.toBeInTheDocument();
  });

  it ('(1 point) should show a "Name already exists" error if name already exists', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await user.type(nameInput, 'Apple');
    expect(screen.getByText(/Name already exists/)).toBeInTheDocument();
    expect(screen.queryByText(/Name must be 3 or more characters/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Name must be 20 characters or less/)).not.toBeInTheDocument();
  });

  it ('(2 points) should have a controlled input that defaults to 1 for Sweetness', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const sweetnessInput = screen.getByRole('spinbutton', { name: /sweetness/i });
    expect(sweetnessInput).toHaveValue(1);
    await user.clear(sweetnessInput);
    await user.type(sweetnessInput, '50');
    expect(sweetnessInput).toHaveValue(50);
  });

  it ('(1 point) should show a "Sweetness must be between 1 and 10" error if sweetness is less than 1', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const sweetnessInput = screen.getByRole('spinbutton', { name: /sweetness/i });
    await user.clear(sweetnessInput);
    await user.type(sweetnessInput, '0');
    expect(screen.getByText(/Sweetness must be between 1 and 10/)).toBeInTheDocument();
  });

  it ('(1 point) should show a "Sweetness must be between 1 and 10" error if sweetness is greater than 10', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const sweetnessInput = screen.getByRole('spinbutton', { name: /sweetness/i });
    await user.clear(sweetnessInput);
    await user.type(sweetnessInput, '11');
    expect(screen.getByText(/Sweetness must be between 1 and 10/)).toBeInTheDocument();
  });

  it ('(2 points) should have a controlled input that defaults to "orange" for the Color dropdown', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const colorInput = screen.getByRole('combobox', { name: /color/i });
    expect(colorInput).toHaveValue('orange');
    await user.selectOptions(colorInput, screen.getByRole('option', { name: 'red' }));
    expect(colorInput).toHaveValue('red');
  });

  it ('(2 points) should have controlled inputs that default to "Seeds" (i.e., "yes") for the seeds radio inputs', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const seeds = screen.getByRole('radio', { name: 'Seeds' });
    const noSeeds = screen.getByRole('radio', { name: 'No Seeds' });
    expect(seeds).toBeChecked();
    expect(noSeeds).not.toBeChecked();

    await user.click(noSeeds);
    expect(noSeeds).toBeChecked();
    expect(seeds).not.toBeChecked();
  });

  it ('(1 point) should disable the submit button (only) when there are errors', async () => {
    render (
      <MemoryRouter>
        <FruitForm fruits={fruits} />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: 'Submit Fruit'});
    const nameInput = screen.getByRole('textbox', { name: /name/i });

    // Button should start disabled because Name is blank
    expect(submitButton).toBeDisabled();
    await user.type(nameInput, 'Plum');
    expect(submitButton).toBeEnabled();
  });

  it ('(1 point) should console log the form values and redirect to "/" when submitted', async () => {
    const App = await initializeRouter("/fruits/new");
    render(<App />);

    const submitButton = screen.getByRole('button', { name: 'Submit Fruit'});
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const sweetnessInput = screen.getByRole('spinbutton', { name: /sweetness/i });
    const colorInput = screen.getByRole('combobox', { name: /color/i });
    const noSeeds = screen.getByRole('radio', { name: 'No Seeds' });

    await user.type(nameInput, 'Blueberry');
    await user.clear(sweetnessInput);
    await user.type(sweetnessInput, '5');
    await user.selectOptions(colorInput, screen.getByRole('option', { name: 'blue' }));
    await user.click(noSeeds);
    expect(submitButton).toBeEnabled(); // Will fail if an input is incorrect
    await user.click(submitButton);

    // Expects route '/' to display the Fruits Index
    expect(screen.getByText('Fruits Index')).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'Blueberry', sweetness: '5', color: 'blue', seeds: 'no' });
  });

  it ('(1 point) should be invoked by the App component at the "/fruits/new" route', async () => {
    const App = await initializeRouter("/fruits/new");
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Enter a Fruit', level: 2 })).toBeInTheDocument();
  });
})

