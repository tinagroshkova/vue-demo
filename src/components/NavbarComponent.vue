<template>
    <nav 
      :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
      <div class="container-fluid">
        <ul class="navbar-nav">
          <navbar-link 
            v-for="(page, index) in publishedPages"
            class="nav-item"
            :key="index"
            :page="page"
            :index="index"
          ></navbar-link>
          <li>
            <router-link
              to="/create"
              class="nav-link"
              active-class="active"
              aria-current="page"
            >Create</router-link>
          </li>
          <li>
            <router-link
              to="/pages"
              class="nav-link"
              active-class="active"
              aria-current="page"
            >Pages</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <button 
            class="btn btn-primary" 
            @click.prevent="changeTheme()"
          >Toggle navbar</button>
        </form>
      </div>
    </nav>
  </template>
  
  <script>
  import NavbarLink from './NavbarLink.vue';
  
  export default {
    components: {
      NavbarLink,
    },
  
    inject: ['$pages', '$bus'],
  
    created() {
      this.getThemeSetting();
      this.updatePages();
  
      this.$bus.$on('page-updated', () => {
        this.updatePages();
      });
  
      this.$bus.$on('page-created', () => {
        this.updatePages();
      });
  
      this.$bus.$on('page-delete', () => {
        this.updatePages();
      });
    },
  
    computed: {
      publishedPages() {
        return this.pages.filter(p => p.published);
      }
    },
  
    data() {
      return {
        theme: 'light',
        pages: []
      }
    },
  
    methods: {
      changeTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.storeThemeSetting();
      },
  
      storeThemeSetting() {
        localStorage.setItem('theme', this.theme);
      },
  
      getThemeSetting() {
        const theme = localStorage.getItem('theme');
        if (theme) {
          this.theme = theme;
        }
      },
  
      updatePages() {
        this.pages = this.$pages.getAllPages();
      }
    }
  }
  </script>
<!-- <template>
    <nav 
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
      <div class="container-fluid">
        <ul class="navbar-nav"> 
            <navbar-link 
                v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                :page="page" 
                :index="index"
            ></navbar-link>
            <li>
                <router-link
                to="/create"
                class="nav-link"
                active-class="active"
                aria-current="page"
                >Create</router-link>
            </li>
            <li>
                <router-link
                to="/pages"
                class="nav-link"
                active-class="active"
                aria-current="page"
                >Pages</router-link>
            </li>
        </ul>
        <form class="d-flex">
          <button 
            class="btn btn-primary" 
            @click.prevent="changeTheme()"
        >Toggle navbar</button>
        </form>
      </div>
    </nav>
  </template>
<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink,
    },

    inject: ['$pages', '$bus'],

    created(){
        this.getThemeSetting();

        this.pages = this.$pages.getAllPages();

        this.$bus.$on('page-updated', () => {
            this.pages = [...this.$pages.getAllPages()];
        });

        this.$bus.$on('page-created', () => {
            this.pages = [...this.$pages.getAllPages()];
        });

        this.$bus.$on('page-delete', () => {
            this.pages = [...this.$pages.getAllPages()];
        });
    },

    computed: {
        publishedPages(){
            return this.pages.filter(p => p.published)
        }
    },

    data() {
        return {
            theme: 'light',
            data: []
        }
    },

    methods: {
        changeTheme() {
            let theme = 'light';
            if (this.theme == 'light') {
                theme = 'dark';
            }
            this.theme = theme;
            this.storeThemeSetting();
        },

        storeThemeSetting(){
            localStorage.setItem('theme', this. theme);
        },

        getThemeSetting(){
            let theme = localStorage.getItem('theme');
            if (theme){
                this.theme = theme;
            }
        }
    }
}
</script> -->