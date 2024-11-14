import s from "./Banner.module.css";

export function Banner() {
  return (
    <section className={s.banner}>
      <div className="container">
        <h1>
          Толстовка HOODY — это больше, чем просто одежда. Это ваш верный друг в
          холодное утро, теплый вечер и дождливый день. Наше качество — ваше
          спокойствие. Выбирай HOODY и будь уверен: с нами тебе всегда будет
          комфортно.
        </h1>
      </div>
    </section>
  );
}
