
const Teamwork = () => {

    return (
      <div className="AsideContext Teamwork" id="Teamwork">
      <h2>فريق العمل</h2>
      <div className="TeamworkList">
        {/* TeamworkListUL */}
        <ul className="TeamworkListUL">
          <li>
            <a href="#">
              <span className="Photo">
                <img className="imgLoader" data-img="https://w.cima4up.io/wp-content/uploads/2020/05/MV5BODJlNWQ4ZjUtYjRhNi00NGQ1LWE3YTItYjRmZGI3YzI4YTEyXkEyXkFqcGdeQXVyMTA2MDIzMDE51807647695.jpg" src="https://w.cima4up.io/wp-content/uploads/2020/05/MV5BODJlNWQ4ZjUtYjRhNi00NGQ1LWE3YTItYjRmZGI3YzI4YTEyXkEyXkFqcGdeQXVyMTA2MDIzMDE51807647695.jpg" />
              </span>
              <div className="ActorName">
                <span>Jason Momoa</span>
                <em>(Baba Voss)</em>
                <div className="CountPosts"><em>عدد الأعمال :</em>26</div>
              </div>
            </a>
          </li>
        </ul>
        {/* MoreTeamworkList */}
        <a href="#!" className="MoreTeamworkList">
          <i className="ion ion-md-add" />المزيد من ممثل آخر
          <em>43</em>
        </a>
      </div>
    </div>
   
    )
 

  }
  
  export default Teamwork