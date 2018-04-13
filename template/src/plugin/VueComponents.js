import {
  Message{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
} from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const VueComponents = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

VueComponents.install = (Vue) => {
  Vue.prototype.$message = Message{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export default VueComponents{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
