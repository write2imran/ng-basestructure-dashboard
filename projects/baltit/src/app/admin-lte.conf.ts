export const adminLteConf = {
  skin: 'yellow-light',
  isSidebarLeftCollapsed: false,
  //isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    //{label: 'Get Started', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    //{label: 'Core Modules', iconClasses: 'fa fa-th-list', disableCollapse:'true', children: [    
    {label: 'Domain Modules', iconClasses: 'fa fa-th-list', disableCollapse:'true', children: [
        {label: 'Users', route: 'users', iconClasses: ''},
        {label: 'Teams', route: 'teams', iconClasses: ''},              
        {label: 'Accounts', route: 'accounts', iconClasses: '' },      
        {label: 'Calls', route: 'calls', iconClasses: ''},
        {label: 'Cases', route: 'cases', iconClasses: ''},
        {label: 'Contacts', route: 'contacts', iconClasses: ''},
        {label: 'Leads', route: 'leads', iconClasses: ''},              
        {label: 'Meetings', route: 'meetings', iconClasses: ''},      
        {label: 'Opportunities', route: 'opportunities', iconClasses: ''},              
        {label: 'Proudcts', route: 'products', iconClasses: ''},              
        {label: 'Streams', route: 'streams', iconClasses: ''},              
        {label: 'Tasks', route: 'tasks', iconClasses: ''},              
      ]}
  ]
};
