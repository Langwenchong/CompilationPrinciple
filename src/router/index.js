import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lexecal from '@/components/Lexecal'
import CodeEditor from '@/components/CodeEditor'
import FileLoader from '@/components/FileLoader'
import LexecalResult from '@/components/LexecalResult'
import SyntaxResult from '@/components/SyntaxResult'
import Homepage from '@/components/Homepage'
import Syntax from '@/components/Syntax'
import GrammarEditor from '@/components/GrammarEditor'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Homepage',
      component: Homepage,

    },
    {

      path: '/Lexecal',
      name: 'Lexecal',
      component: Lexecal,
      children: [{
          path: '/CodeEditor',
          name: 'CodeEditor',
          component: CodeEditor
        },
        {
          path: '/FileLoader',
          name: 'FileLoader',
          component: FileLoader
        }
      ]
    },
    {
      path: '/Syntax',
      name: 'Syntax',
      component: Syntax,
      children: [{
        path: '/GrammarEditor',
        name: 'GrammarEditor',
        component: GrammarEditor
      }]
    },
    {
      path: '/LexecalResult',
      name: 'LexecalResult',
      component: LexecalResult
    },
    {
      path: '/SyntaxResult',
      name: 'SyntaxResult',
      component: SyntaxResult
    }
  ]
})
