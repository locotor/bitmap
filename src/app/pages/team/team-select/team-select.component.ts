import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'core/services/global.service';
import { TeamService } from 'core/services/team.service';
import { Team } from 'core/types/team';
import { TeamCreatorComponent } from 'shared/components/team-creator/team-creator.component';

@Component({
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private dialog: MatDialog,
    private globalService: GlobalService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teams = this.getTeamList();
  }

  getTeamList(): Team[] {
    // const currentUserId = this.globalService.currentUser.id;
    // this.teamService.getTeamListByMemberId(currentUserId).subscribe((resp: any) => {
    //   this.teams = resp.data;
    // });
    return [
      {
        id: '1',
        teamName: '市场监管开发组'
      },
      {
        id: '2',
        teamName: '智慧渔政开发小组'
      }
    ]
  }

  openTeamCreatorDialog() {
    const dialogRef = this.dialog.open(TeamCreatorComponent, {
      autoFocus: false,
      width: '650px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isCreateTeamSuccess) {
        this.getTeamList();
      }
    });
  }

}
