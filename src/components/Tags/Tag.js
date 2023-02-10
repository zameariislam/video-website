import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice';

const Tag = ({ tag }) => {

    const { tags } = useSelector((state => state.filter))
    const dispatch = useDispatch()
    
    const { title } = tag
    const isSelected = tags.includes(title) ? true : false
    const style = isSelected ? ` bg-blue-600 text-white-600 px-4 py-1 
 rounded-full cursor-pointer `: `bg-blue-100 text-blue-600 px-4 py-1 
 rounded-full cursor-pointer `


    const handleTagSelection = (title) => {
        if (tags.includes(title)) {
            dispatch(tagRemoved(title))

        }
        else {
            dispatch(tagSelected(title))

        }




    }


    return (
        <div>
            <div onClick={() => handleTagSelection(title)}
                className={style}
            >
                {title}
            </div>

            {/* <div
                    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                >
                    redux
                </div> */}

        </div>
    );
};

export default Tag;