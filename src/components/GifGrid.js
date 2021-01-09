import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data: imagenes, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grip">
                {
                    imagenes.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />)
                }
            </div>
        </>
    );
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}