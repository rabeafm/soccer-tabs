import {Fragment, useEffect, useState} from "react";

interface lega{
  league: string;
}
const Tab = (league:lega) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league.league}`);
        const body = await result.json();
        setTeams(body.teams);
      } catch(err) {
        console.log(err)
      } 
    }
  fetchData()
  // eslint-disable-next-line
  },[])
  
  return <Fragment>
          <h2>{league.league}</h2>
          <div className="Tab">
            {teams!==[] ? teams.map((team:any, i:number)=>
              <div key={i} className="teamdiv">
                <img src={team.strTeamBadge+"/preview"} alt={team.strTeam} />
                <h3>{team.strTeam}</h3>
              </div>) : ""}
          </div>
        </Fragment>
};

export default Tab;

