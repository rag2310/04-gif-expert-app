import { shallow } from 'enzyme';
import { AddCartegory } from '../../components/AddCartegory';

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCartegory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCartegory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', {
            target: {
                value: value
            }
        });
    })

    test('NO debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Tareas';

        input.simulate('change', {
            target: {
                value: value
            }
        });
        
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();

        const textInput = wrapper.find('input').text();
        
        expect(textInput).toBe('');
    })


})
