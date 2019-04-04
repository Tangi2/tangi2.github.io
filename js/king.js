            Bokeh.$(function() {
            Bokeh.safely(function() {
                var docs_json = {"89683612-0ab2-4290-836c-0998cbeff792":{"roots":{"references":[{"attributes":{},"id":"0bd35fa5-790e-4308-a718-cb9afc516572","type":"ToolEvents"},{"attributes":{},"id":"e988cd78-e07e-450a-923c-acd12bfc6178","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"d9a3007b-bb7f-49ba-97be-3f73a4f43d10","type":"Line"},{"attributes":{"data_source":{"id":"2aeef67c-94fd-46a1-9691-9affb8c71ccb","type":"ColumnDataSource"},"glyph":{"id":"63365dc3-3cd2-46fe-a18c-8ea84d99db72","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"d9a3007b-bb7f-49ba-97be-3f73a4f43d10","type":"Line"},"selection_glyph":null},"id":"14eb35df-89da-4d6e-8de2-c1d53ec349e8","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#9D2F74"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"2410bdf0-8c24-4266-9131-15f88a16311c","type":"Line"},{"attributes":{"callback":null,"column_names":["Year","index","Artist","Track","Album","top10"],"data":{"Album":["Off The Wall","One Day In Your Life","Pas d'album dans le top","Thriller","Thriller","Pas d'album dans le top","Pas d'album dans le top","Bad","Bad","Bad","Pas d'album dans le top","Dangerous","Dangerous","Dangerous","Pas d'album dans le top","HIStory: Past, Present And Future","HIStory: Past, Present And Future","Blood On The Dance Floor","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Invincible","Invincible","Number Ones","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Wanna Be Startin' Something' 2008","Pas d'album dans le top","Pas d'album dans le top","Michael","Pas d'album dans le top","Thriller","Thriller","Pas d'album dans le top","Pas d'album dans le top"],"Artist":["Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson","Michael Jackson"],"Track":["Off The Wall","One Day In Your Life","Pas de titre dans le top","P.Y.T. (Pretty Young Thing)","Farewell My Summer Love","Pas de titre dans le top","Pas de titre dans le top","Bad","Another Part Of Me","Smooth Criminal","Pas de titre dans le top","Black Or White","Jam","Who Is It","Pas de titre dans le top","Childhood","They Don't Care About Us","Blood On The Dance Floor","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","You Rock My World","Butterflies","One More Chance","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Wanna Be Startin' Something' 2008","Pas de titre dans le top","Pas de titre dans le top","Hold My Hand","Pas de titre dans le top","Thriller","Billie Jean","Pas de titre dans le top","Pas de titre dans le top"],"Year":[1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"index":[13297,13604,0,14184,14461,1,2,15249,15506,15762,3,16285,16550,16799,4,17311,17572,17813,5,6,7,18787,18992,19224,8,9,10,11,20409,12,13,21089,14,21528,21755,15,16],"top10":[13.0,0.0,0.0,42.0,5.0,0.0,0.0,11.0,18.0,3.0,0.0,10.0,13.0,6.0,0.0,16.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0]}},"id":"bc932502-9fb1-4b0c-a3ca-619838f5bb66","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#8FD847"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"71a463c1-db64-460b-8bd5-0278d3954a72","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9bf3c50f-bcaa-43f1-aef5-6aaa768011c4","type":"HoverTool"}]},"id":"df0c1ba3-ebe6-441f-8e18-0dea1f3a65fe","type":"Toolbar"},{"attributes":{"callback":null,"plot":{"id":"116a931a-ccb5-408f-b4c5-ea9b100d51b6","subtype":"Figure","type":"Plot"},"tooltips":[["Ann\u00e9e","@Year"],["Artiste","@Artist"],["Top Chanson","@Track"]]},"id":"9bf3c50f-bcaa-43f1-aef5-6aaa768011c4","type":"HoverTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"589d8744-45ac-4d21-8961-5abfbb075f66","type":"Line"},{"attributes":{},"id":"280b4cc3-9f39-45c6-b06d-64068672c5a5","type":"BasicTickFormatter"},{"attributes":{"grid_line_alpha":{"value":0.3},"grid_line_color":{"value":"white"},"plot":{"id":"116a931a-ccb5-408f-b4c5-ea9b100d51b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e988cd78-e07e-450a-923c-acd12bfc6178","type":"BasicTicker"}},"id":"aaf64f9d-652f-4d7f-9d07-86cfa1baa94f","type":"Grid"},{"attributes":{"axis_label":"Nombre total de semaines avec un titre class\u00e9 dans le Top 10","axis_label_text_color":{"value":"white"},"axis_line_color":{"value":"white"},"formatter":{"id":"decec3dd-5ec2-4376-af3e-56a4ba7a9ffe","type":"BasicTickFormatter"},"major_label_text_color":{"value":"white"},"minor_tick_line_color":{"value":"white"},"plot":{"id":"116a931a-ccb5-408f-b4c5-ea9b100d51b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"24da94aa-19e8-42a5-b8a2-76bdfef17366","type":"BasicTicker"}},"id":"9a415213-30d1-4d28-8dcb-e99c0efde72f","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#3E3636"},"below":[{"id":"3b817e1e-ff6a-4531-b1cc-e3431d41d2d9","type":"LinearAxis"}],"border_fill_color":{"value":"#3E3636"},"left":[{"id":"9a415213-30d1-4d28-8dcb-e99c0efde72f","type":"LinearAxis"}],"plot_width":700,"renderers":[{"id":"3b817e1e-ff6a-4531-b1cc-e3431d41d2d9","type":"LinearAxis"},{"id":"aaf64f9d-652f-4d7f-9d07-86cfa1baa94f","type":"Grid"},{"id":"9a415213-30d1-4d28-8dcb-e99c0efde72f","type":"LinearAxis"},{"id":"a97cae2d-09a8-4b29-bc1e-413cab8b7a1d","type":"Grid"},{"id":"4cad3f3e-8ae2-4388-a35a-43e6ceeffae8","type":"Legend"},{"id":"c45b4450-718a-4aff-8301-bf8edf58d6a9","type":"GlyphRenderer"},{"id":"14eb35df-89da-4d6e-8de2-c1d53ec349e8","type":"GlyphRenderer"},{"id":"c42a00a0-1ef3-49d5-b883-9a942b56f5ac","type":"GlyphRenderer"}],"title":{"id":"ee7a430d-fce1-4509-a0a6-97519ecee31d","type":"Title"},"tool_events":{"id":"0bd35fa5-790e-4308-a718-cb9afc516572","type":"ToolEvents"},"toolbar":{"id":"df0c1ba3-ebe6-441f-8e18-0dea1f3a65fe","type":"Toolbar"},"x_range":{"id":"29f3c351-c634-47cb-9a83-1a8bf5812b96","type":"DataRange1d"},"y_range":{"id":"6280ed2f-9faf-4dba-8397-af186aa1cce3","type":"DataRange1d"}},"id":"116a931a-ccb5-408f-b4c5-ea9b100d51b6","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"Justin Timberlake"},"renderers":[{"id":"14eb35df-89da-4d6e-8de2-c1d53ec349e8","type":"GlyphRenderer"}]},"id":"17e88d32-0cdc-48a7-8e14-5554ac08e98e","type":"LegendItem"},{"attributes":{"callback":null},"id":"29f3c351-c634-47cb-9a83-1a8bf5812b96","type":"DataRange1d"},{"attributes":{"axis_label":"Ann\u00e9e","axis_label_text_color":{"value":"white"},"axis_line_color":{"value":"white"},"formatter":{"id":"280b4cc3-9f39-45c6-b06d-64068672c5a5","type":"BasicTickFormatter"},"major_label_text_color":{"value":"white"},"minor_tick_line_color":{"value":"white"},"plot":{"id":"116a931a-ccb5-408f-b4c5-ea9b100d51b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e988cd78-e07e-450a-923c-acd12bfc6178","type":"BasicTicker"}},"id":"3b817e1e-ff6a-4531-b1cc-e3431d41d2d9","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"e934d189-a867-4388-951f-5c7e3a3b4936","type":"Line"},{"attributes":{},"id":"decec3dd-5ec2-4376-af3e-56a4ba7a9ffe","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Bruno Mars"},"renderers":[{"id":"c42a00a0-1ef3-49d5-b883-9a942b56f5ac","type":"GlyphRenderer"}]},"id":"972011a6-da9e-4b54-ab04-0662b53110ee","type":"LegendItem"},{"attributes":{"plot":null,"text":null,"text_color":{"value":"white"}},"id":"ee7a430d-fce1-4509-a0a6-97519ecee31d","type":"Title"},{"attributes":{},"id":"24da94aa-19e8-42a5-b8a2-76bdfef17366","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["Year","index","Artist","Track","Album","top10"],"data":{"Album":["Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Like I Love You","Rock Your Body","Pas d'album dans le top","Pas d'album dans le top","SexyBack","What Goes Around Comes Around","Pas d'album dans le top","Pas d'album dans le top","Hope For Haiti","Pas d'album dans le top","Pas d'album dans le top","The 20/20 Experience","Not A Bad Thing","Pas d'album dans le top","Pas d'album dans le top"],"Artist":["Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake","Justin Timberlake"],"Track":["Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Like I Love You","Senorita","Pas de titre dans le top","Pas de titre dans le top","SexyBack","LoveStoned","Pas de titre dans le top","Pas de titre dans le top","Hallelujah","Pas de titre dans le top","Pas de titre dans le top","Take Back The Night","Not A Bad Thing","Pas de titre dans le top","Pas de titre dans le top"],"Year":[1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,18960,19190,22,23,19881,20133,24,25,20817,26,27,21486,21721,28,29],"top10":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,16.0,0.0,0.0,26.0,16.0,0.0,0.0,0.0,0.0,0.0,28.0,6.0,0.0,0.0]}},"id":"2aeef67c-94fd-46a1-9691-9affb8c71ccb","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Year","index","Artist","Track","Album","top10"],"data":{"Album":["Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Doo-Wops & Hooligans","Doo-Wops & Hooligans","Unorthodox Jukebox","Unorthodox Jukebox","Unorthodox Jukebox","Pas d'album dans le top","Pas d'album dans le top"],"Artist":["Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars","Bruno Mars"],"Track":["Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","The Lazy Song","Marry You","Runaway Baby","Gorilla","Young Girls","Pas de titre dans le top","Pas de titre dans le top"],"Year":[1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,20751,20975,21192,21407,21633,30,31],"top10":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,22.0,40.0,20.0,25.0,0.0,0.0,0.0]}},"id":"56bb25b7-5b69-45f1-ade8-b3063bc3d3e2","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"6280ed2f-9faf-4dba-8397-af186aa1cce3","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"#3E3636"},"border_line_color":{"value":"#3E3636"},"items":[{"id":"41c1cf69-f215-4211-ad49-ada6bff80227","type":"LegendItem"},{"id":"17e88d32-0cdc-48a7-8e14-5554ac08e98e","type":"LegendItem"},{"id":"972011a6-da9e-4b54-ab04-0662b53110ee","type":"LegendItem"}],"label_text_color":{"value":"white"},"location":"top_left","orientation":"horizontal","plot":{"id":"116a931a-ccb5-408f-b4c5-ea9b100d51b6","subtype":"Figure","type":"Plot"}},"id":"4cad3f3e-8ae2-4388-a35a-43e6ceeffae8","type":"Legend"},{"attributes":{"label":{"value":"Michael Jackson"},"renderers":[{"id":"c45b4450-718a-4aff-8301-bf8edf58d6a9","type":"GlyphRenderer"}]},"id":"41c1cf69-f215-4211-ad49-ada6bff80227","type":"LegendItem"},{"attributes":{"data_source":{"id":"56bb25b7-5b69-45f1-ade8-b3063bc3d3e2","type":"ColumnDataSource"},"glyph":{"id":"71a463c1-db64-460b-8bd5-0278d3954a72","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"589d8744-45ac-4d21-8961-5abfbb075f66","type":"Line"},"selection_glyph":null},"id":"c42a00a0-1ef3-49d5-b883-9a942b56f5ac","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"116a931a-ccb5-408f-b4c5-ea9b100d51b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"24da94aa-19e8-42a5-b8a2-76bdfef17366","type":"BasicTicker"}},"id":"a97cae2d-09a8-4b29-bc1e-413cab8b7a1d","type":"Grid"},{"attributes":{"line_color":{"value":"#36C6E4"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"63365dc3-3cd2-46fe-a18c-8ea84d99db72","type":"Line"},{"attributes":{"data_source":{"id":"bc932502-9fb1-4b0c-a3ca-619838f5bb66","type":"ColumnDataSource"},"glyph":{"id":"2410bdf0-8c24-4266-9131-15f88a16311c","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e934d189-a867-4388-951f-5c7e3a3b4936","type":"Line"},"selection_glyph":null},"id":"c45b4450-718a-4aff-8301-bf8edf58d6a9","type":"GlyphRenderer"}],"root_ids":["116a931a-ccb5-408f-b4c5-ea9b100d51b6"]},"title":"Bokeh Application","version":"0.12.3"}};
                var render_items = [{"docid":"89683612-0ab2-4290-836c-0998cbeff792","elementid":"8d3aa4a3-8f35-46ee-8880-9609e38866f1","modelid":"116a931a-ccb5-408f-b4c5-ea9b100d51b6"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
            });
        });