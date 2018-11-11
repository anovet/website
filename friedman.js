"use strict";

function show_selected() {
    var selector = document.getElementById('id_of_select');
    var abbrev_len = Math.floor(Math.random()*(4-3+1)+3)
    var team_len =  selector[selector.selectedIndex].value.length
    var value = selector[selector.selectedIndex].value;
    var team_abbrev = ""
    var team_index = 1
    team_abbrev += value.charAt(0)
    while (team_abbrev.length < abbrev_len){
      team_index = Math.floor(Math.random()*(team_len-(team_index+1)+1)+team_index)
      while (team_index == team_len || team_abbrev.includes(value.charAt(team_index))){
        team_index = Math.floor(Math.random()*(team_len-(value.indexOf(team_abbrev[team_abbrev.length -1])))+value.indexOf(team_abbrev[team_abbrev.length -1])) 
      } 
      team_abbrev += value.charAt(team_index)
    }

    document.getElementById('display').innerHTML = team_abbrev.toUpperCase();
}

document.getElementById('btn').addEventListener('click', show_selected);;