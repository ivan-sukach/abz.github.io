// register select
Vue.component('v-select', VueSelect.VueSelect);
const urlUsers = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
const urlPositions = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
let vueApp =new Vue({
  el: '#app',
  data: {

    mobMenuVisible: false,

    
    users: [],
 
    siteMenu: [
      'About me',
      'Relationships',
      'Requirements',
      'Users',
      'Sign Up'
    ],

    // список select в форме
    positions: [],

    // ul в футере
    footerUl: {
     ul1: [
      'News',
      'Blog',
      'Partners',
      'Shop'
     ],
     ul2: [
      'Overview',
      'Design',
      'Code',
      'Collaborate'
     ],
     ul3: [
      'Tutorials',
      'Resources',
      'Guides',
      'Examples'
     ],
     ul4: [
      'FAQ',
      'Terms',
      'Conditions',
      'Help'
     ]
    },

  },

  mounted() {
    axios.get(urlUsers).then(response => {
      user = response.data;
      // запушили в users
      for(let i = 0; i < user.users.length; i++){
        this.users.push(user.users[i]);
        this.users.sort(function(a, b){
          return a.position_id - b.position_id
        });
      }
    })

    
    axios.get(urlPositions).then(response => {
      // получили
      position = response.data;

      // запушили в positions
      for(let i = 0; i < position.positions.length; i++){
        this.positions.push(position.positions[i].name);
      }
      this.positions.sort();

    })
  },

});