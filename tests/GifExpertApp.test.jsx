import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('', () => {

    test('should', () => {
        render( <GifExpertApp/>);
        screen.debug();
        expect(screen.getByText('GifExpertApp'));
    });

});