import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {
    const title = 'goku';
    const url = 'https://goku.com/goku.jpg';
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url }/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={ url }/>);
        screen.debug();
        expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={ url }/>);
        expect( screen.getByText(title) ).toBeTruthy();

    });
});