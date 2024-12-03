import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    
    const category = 'Goku';

    test('debe de mostrar el loadind inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        expect(screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg'
            },
            {
                id: '123',
                title: 'Saitama',
                url: 'https://localhost/Saitama.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length).toBe(2);
        screen.debug();

    });

});
