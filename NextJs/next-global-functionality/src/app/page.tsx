import style from './style/Page.module.scss'

export default function Home() {
  const test = 2
  console.log(test)
  return (
    <>
      <div className={style.homePage} >
        <h1>this is the home page</h1>
      </div>
    </>
  );
}
