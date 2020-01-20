# Description

This is a VERY simple package and it's hardcoded to create my folder/file structure for implementing the SMACSS methodology with SASS.

If you want to know more about SMACSS, the [official website](http://smacss.com/) is the best content you will need to start.

# How to use
Open your terminal, run **npm i -g smacss-sass** then **cd** into your project folder and run **smacss-sass**

That's it! It will create a folder called **sass** with the folders and files you need to start.

# Files

>  **sass**  
>  >***app.sass*** # comment  
>
>  >**base**  
>  >>***_mixins.sass*** # general mixins  
>  >>***_variables.sass*** # variables  
>  >>***_fonts.sass*** # all font imports  
>  >>***_reset.sass*** # resets  
>  >>***_base.sass*** # base styles  
>  >>***_import.sass*** # imports the base files  
>
>  >**layout**  
>  >>***_layout.sass*** # layout  
>  >>***_import.sass*** # imports the layout files  
>
>  >**module**  
>  >> ... here you have only a import file waiting for you to create your own modules and import them  
>  >>***_import.sass*** # imports the module files  
>
>  >**state**  
>  >>***_state.sass*** # states  
>  >>***_import.sass*** # imports the states files  
>
>  >**theme**  
>  >>***_theme.sass*** # themes (you can delete this and create specific files for each theme if it gets really big  
>  >>***_import.sass*** # imports the theme files  
