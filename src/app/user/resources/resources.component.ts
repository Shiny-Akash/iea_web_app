import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  showCompletedProjects = false
  showSyllabus = true
  showSubjectMaterials = false
  showAptitude = false
  showProgramming = false
  showCoreMaterials = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showCompletedProjects = false
    this.showSyllabus = false
    this.showSubjectMaterials = false
    this.showAptitude = false
    this.showProgramming = false
    this.showCoreMaterials = false
  }
}
