export default Object.freeze({
  root: '/',

  // Access
  get access() {
    return '/access';
  },
  get accessLogin() {
    return `${this.access}/login`;
  },
  get accessRegister() {
    return `${this.access}/register`;
  },

  // Dashboard
  get dashboard() {
    return '/dashboard';
  },
  get dashboardProjects() {
    return `${this.dashboard}/projects`;
  },
  get dashboardProject() {
    return `${this.dashboardProjects}/:projectId`;
  },

  get dashboardTeams() {
    return `${this.dashboard}/teams`;
  },
  get dashboardTeam() {
    return `${this.dashboardTeams}/:teamId`;
  },
  get dashboardTeamMembers() {
    return `${this.dashboardTeam}/members`;
  },
  get dashboardSettings() {
    return `${this.dashboard}/settings`;
  }
});