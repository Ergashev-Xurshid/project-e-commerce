import React from 'react'
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function MainProductCards({ title, selectCategory }) {
  const { products, toggleLike } = useFavoritesStore();
  const { t } = useTranslation();

  return (
    <div className='pt-[100px]'>
      <h1 className='text-center text-[20px] md:text-[35px] text-black my-[30px]'>{title}</h1>
      <p className='text-center text-[16px] text-black mb-[80px]'>{t("winter-text")}</p>
      <ul className='grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
        {products.map((item, idx) => {
          if (item.category === selectCategory) {
            return (
              <div key={idx} className="relative cursor-pointer hover:text-[#ff0000]">
                <Link to={`/product/${item.id}`}>
                  <div className='hover:scale-[1.1] z-10 rounded-[15px] transition-all duration-500 ease-out overflow-hidden'>
                    <img src={item.img} alt={item.title} className='w-full h-auto object-cover' />
                  </div>
                </Link>
                <div onClick={() => toggleLike(item.id)} className="absolute z-20 top-0 right-0 bg-[#d4d4d4] py-2 px-[10px] rounded-full cursor-pointer">
                  <button className='cursor-pointer'>
                    {item.like ? "❤️" : "🤍"}
                  </button>
                </div>
                <p className="my-4 text-[14px] md:text-lg font-medium">{t(item.titleKey)}</p>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default MainProductCards;
