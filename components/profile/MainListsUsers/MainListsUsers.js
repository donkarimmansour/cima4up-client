import MainSlidUsers from "./MainSlidUsers"

const MainListsUsers = () => {
  return (
    <div className="MainListsUsers">
    <h2>
      <i className="ion ion-ios-ribbon" />
      <span>قد يعجبك أيضاَ !</span>
      <em>تصفح قوائم مشاهدة أعضاء مجتمع سيما فور أب </em>
    </h2>
    <div className="ClosseSocialty"><i className="ion-md-close" /></div>
    {/* MainSlidUsers */}
    <MainSlidUsers/>
  </div>

  )
}

export default MainListsUsers