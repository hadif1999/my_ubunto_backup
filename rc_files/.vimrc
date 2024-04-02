

let g:pymode = 1
let g:pymode_python = 'python3'
let g:pymode_indent = 1
let g:pymode_doc = 1
let g:pymode_virtualenv = 1
let g:pymode_rope_completion = 1
let g:pymode_rope_complete_on_dot = 1
let g:pymode_syntax_all = 1
let g:pymode_lint = 0
let g:pymode_run_bind = '<leader>r'
let g:pymode_syntax_slow_sync = 1
let g:pymode_rope_complete_on_dot = 1
let g:pymode_rope_completion_bind = '<C-Space>'
let g:pymode_rope_autoimport = 1
let g:pymode_syntax = 1
let g:pymode_rope_project_root = "."

" Pathogen load
filetype off

call pathogen#infect()
call pathogen#helptags()

filetype plugin indent on
syntax on
set nocompatible              " required
filetype off                  " required


" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'gmarik/Vundle.vim'

" add all your plugins here (note older versions of Vundle
" used Bundle instead of Plugin)

" ...

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
execute pathogen#infect()
syntax on
filetype plugin indent on

set number
set hlsearch
