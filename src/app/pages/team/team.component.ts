import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GlobalService } from 'core/services/global.service';
import { TeamService } from 'core/services/team.service';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  relevantNavs = [
    { name: '首页', icon: 'home' },
    { name: '我参与的', icon: 'person_add' },
    { name: '我创建的', icon: 'post_add' },
  ];

  collaborators = [
    {
      name: '张三'
    },
    {
      name: '李四'
    },
    {
      name: '王麻子'
    }
  ];
  private teamId: string;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private globalService: GlobalService
  ) { }


  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('teamId');
    this.globalService.currentTeamId = teamId;
    this.globalService.currentTeam$ = this.teamService.getTeam(teamId);
  }

}
