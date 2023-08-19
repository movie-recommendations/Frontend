import './Bookmark_small.css';
import { BtnBookmark } from '../Button_bookmark/Btn_bookmark';
import { IBookmarkTypes } from 'src/types/Bookmark.types';

export const BookmarkSmall = ({ id }: { id: number }) => {
	return (
		<section>
			<BtnBookmark nameTypes={IBookmarkTypes.favorite} id={id} />
			<BtnBookmark nameTypes={IBookmarkTypes.willSee} id={id} />
			{/* <div
				className='bookmark_favorite'
				onClick={handleClickFavorite}
			>
				<div className='bookmark_fon' />
				<img
					className='bookmark_img'
					src={filmFav ? img_bookmark_pressed : img_bookmark_default}
					alt="favorite"
				/>
			</div>
			<div
				className='bookmark_favorite'
				onClick={handleClickWatch}
			>
				<div className='bookmark_fon' />
				<img
					className='bookmark_img'
					src={filmWatch ? img_watch_pressed : img_watch_default}
					alt="favorite"
				/>
			</div> */}
		</section>
	);
};
