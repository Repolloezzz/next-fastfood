import style from '../styles/Map.module.scss'
export function Mapa() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9501.288088142106!2d-68.13001200967398!3d-16.50421599293125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sumsa!5e0!3m2!1ses-419!2sbo!4v1668476202839!5m2!1ses-419!2sbo"
        className={`${style.map}`}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
