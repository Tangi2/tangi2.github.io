Bokeh.$(function() {
            Bokeh.safely(function() {
                var docs_json = {"4f9e68af-f15e-4272-815d-0cf57e19839c":{"roots":{"references":[{"attributes":{},"id":"8b55a5d4-48a2-43bc-9725-9796341bc3aa","type":"BasicTicker"},{"attributes":{"plot":null,"text":null,"text_color":{"value":"white"}},"id":"047a41b4-8767-4c6d-8117-e145d64ca32d","type":"Title"},{"attributes":{"label":{"value":"Beyonce"},"renderers":[{"id":"e8c36601-c7c1-44c2-b89d-d90bb011634e","type":"GlyphRenderer"}]},"id":"cd024185-a3e4-4898-b89c-a5a771ade366","type":"LegendItem"},{"attributes":{"line_color":{"value":"#FC9665"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"b721c95f-5a57-40ad-9a90-bb8916b50533","type":"Line"},{"attributes":{},"id":"0d227096-2d55-41af-91dc-83819d3c4ba6","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Ann\u00e9e","axis_label_text_color":{"value":"white"},"axis_line_color":{"value":"white"},"formatter":{"id":"0d227096-2d55-41af-91dc-83819d3c4ba6","type":"BasicTickFormatter"},"major_label_text_color":{"value":"white"},"minor_tick_line_color":{"value":"white"},"plot":{"id":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b55a5d4-48a2-43bc-9725-9796341bc3aa","type":"BasicTicker"}},"id":"cf37b745-9710-4d89-a04f-78e9dbe12757","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#3E3636"},"below":[{"id":"cf37b745-9710-4d89-a04f-78e9dbe12757","type":"LinearAxis"}],"border_fill_color":{"value":"#3E3636"},"left":[{"id":"2f5aae7f-85bf-4ab0-8f07-a1e0265b3b3e","type":"LinearAxis"}],"plot_width":700,"renderers":[{"id":"cf37b745-9710-4d89-a04f-78e9dbe12757","type":"LinearAxis"},{"id":"decc3ade-d3a3-46cd-aac8-52a4e8b60e94","type":"Grid"},{"id":"2f5aae7f-85bf-4ab0-8f07-a1e0265b3b3e","type":"LinearAxis"},{"id":"ed551ddd-72e1-453c-8d05-e88865574f2e","type":"Grid"},{"id":"6a9975ae-b8b5-44ea-95c6-7a4ef9a0ea2a","type":"Legend"},{"id":"f75ea230-6e6f-4a40-be72-648c2650c8d1","type":"GlyphRenderer"},{"id":"e4cdb907-fa24-4c71-8d01-c70530344bc8","type":"GlyphRenderer"},{"id":"e8c36601-c7c1-44c2-b89d-d90bb011634e","type":"GlyphRenderer"}],"title":{"id":"047a41b4-8767-4c6d-8117-e145d64ca32d","type":"Title"},"tool_events":{"id":"b151e9f3-e203-46ba-85c7-9028ae9bf519","type":"ToolEvents"},"toolbar":{"id":"ea2ca1db-ad02-4c9d-82a3-6a9107bfba9a","type":"Toolbar"},"x_range":{"id":"542af380-717b-469b-bf54-9c1c583b37fe","type":"DataRange1d"},"y_range":{"id":"e7f1a561-b6e2-41b1-85fa-f969eb705b3d","type":"DataRange1d"}},"id":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"803ed771-2ba8-4a38-83e3-9773df22c327","type":"ColumnDataSource"},"glyph":{"id":"b721c95f-5a57-40ad-9a90-bb8916b50533","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"2ea903a7-1e7d-468b-99e8-530781937f87","type":"Line"},"selection_glyph":null},"id":"e8c36601-c7c1-44c2-b89d-d90bb011634e","type":"GlyphRenderer"},{"attributes":{},"id":"11d9a68f-a4be-461d-91e8-0a92bf22caab","type":"BasicTicker"},{"attributes":{},"id":"b151e9f3-e203-46ba-85c7-9028ae9bf519","type":"ToolEvents"},{"attributes":{},"id":"aa2cdbde-30e1-417e-86b7-2b7c0b075f17","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"b5e1dbba-067a-45c7-8a70-88950e4b63f5","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a905e892-adf8-484f-8ccc-b201b4efdcfa","type":"HoverTool"}]},"id":"ea2ca1db-ad02-4c9d-82a3-6a9107bfba9a","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"11d9a68f-a4be-461d-91e8-0a92bf22caab","type":"BasicTicker"}},"id":"ed551ddd-72e1-453c-8d05-e88865574f2e","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"2ea903a7-1e7d-468b-99e8-530781937f87","type":"Line"},{"attributes":{"data_source":{"id":"7068173b-e8c6-49af-ab72-3912f55ab63b","type":"ColumnDataSource"},"glyph":{"id":"24c9a46d-94e2-4c1a-a9a5-a99cf5461f0a","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"b5e1dbba-067a-45c7-8a70-88950e4b63f5","type":"Line"},"selection_glyph":null},"id":"f75ea230-6e6f-4a40-be72-648c2650c8d1","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Madonna"},"renderers":[{"id":"f75ea230-6e6f-4a40-be72-648c2650c8d1","type":"GlyphRenderer"}]},"id":"a549e169-c68a-4f17-9f44-7a8c1d3349ed","type":"LegendItem"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"0ec52744-5736-464c-a022-c2271214efdb","type":"Line"},{"attributes":{"callback":null},"id":"542af380-717b-469b-bf54-9c1c583b37fe","type":"DataRange1d"},{"attributes":{"label":{"value":"Rihanna"},"renderers":[{"id":"e4cdb907-fa24-4c71-8d01-c70530344bc8","type":"GlyphRenderer"}]},"id":"7b1f32a8-5f0d-409e-abde-166241e96fa0","type":"LegendItem"},{"attributes":{"callback":null},"id":"e7f1a561-b6e2-41b1-85fa-f969eb705b3d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9992d113-569a-41bb-839c-298cf5c6f6d9","type":"ColumnDataSource"},"glyph":{"id":"a7ed3f73-9f69-48e0-8d31-78322a12b92d","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"0ec52744-5736-464c-a022-c2271214efdb","type":"Line"},"selection_glyph":null},"id":"e4cdb907-fa24-4c71-8d01-c70530344bc8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["Year","Artist","top10","Album","index","Track"],"data":{"Album":["Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Madonna","Like a Virgin","True Blue","True Blue","Pas d'album dans le top","Like a Prayer","Keep It Together","Justify My Love","Erotica","Erotica","I'll Remember","Bedtime Stories","Like a Virgin","Evita","Ray of Light","Nothing Really Matters","Music","What It Feels Like For A Girl","Die Another Day","American Life","Pas d'album dans le top","Hung Up","Confessions on a Dance Floor","Pas d'album dans le top","Hard Candy","Celebration","Pas d'album dans le top","Pas d'album dans le top","MDNA","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top"],"Artist":["Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna","Madonna"],"Track":["Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Holiday","Angel","True Blue","Causing A Commotion","Pas de titre dans le top","Cherish","Oh Father","Rescue Me","Erotica","Rain","I'll Remember","Bedtime Story","You Must Love Me","Don't Cry For Me Argentina","The Power Of Good-bye","Beautiful Stranger","American Pie","What It Feels Like For A Girl","Die Another Day","American Life","Pas de titre dans le top","Hung Up","Sorry","Pas de titre dans le top","Give It 2 Me","Celebration","Pas de titre dans le top","Pas de titre dans le top","Give Me All Your Luvin'","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top"],"Year":[1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"index":[0,1,2,3,14455,14722,14983,15244,4,15753,16021,16276,16540,16791,17048,17300,17561,17801,18078,18322,18557,18779,18984,19216,5,19665,19914,6,20397,20636,7,8,21302,9,10,11,12],"top10":[0.0,0.0,0.0,0.0,15.0,23.0,18.0,22.0,0.0,17.0,11.0,9.0,12.0,4.0,21.0,20.0,0.0,3.0,12.0,0.0,12.0,8.0,4.0,0.0,0.0,2.0,0.0,0.0,11.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0]}},"id":"7068173b-e8c6-49af-ab72-3912f55ab63b","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#7D85E5"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"24c9a46d-94e2-4c1a-a9a5-a99cf5461f0a","type":"Line"},{"attributes":{"line_color":{"value":"#49F1C3"},"line_width":{"value":2.5},"x":{"field":"Year"},"y":{"field":"top10"}},"id":"a7ed3f73-9f69-48e0-8d31-78322a12b92d","type":"Line"},{"attributes":{"callback":null,"plot":{"id":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4","subtype":"Figure","type":"Plot"},"tooltips":[["Ann\u00e9e","@Year"],["Artiste","@Artist"],["Top Chanson","@Track"]]},"id":"a905e892-adf8-484f-8ccc-b201b4efdcfa","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["Year","Artist","top10","Album","index","Track"],"data":{"Album":["Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Dangerously in Love","Pas d'album dans le top","B'Day","Irremplazable","I Am Sasha Fierce","I Am Sasha Fierce","Pas d'album dans le top","4","4","B'Day","BEYONCE","Pas d'album dans le top","Pas d'album dans le top"],"Artist":["Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce","Beyonce"],"Track":["Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Naughty Girl","Pas de titre dans le top","Ring The Alarm","Listen","If I Were A Boy","Diva","Pas de titre dans le top","Best Thing I Never Had","Dance For You","Get Me Bodied","7/11","Pas de titre dans le top","Pas de titre dans le top"],"Year":[1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,19323,24,19779,20030,20264,20512,25,20961,21183,21395,21622,26,27],"top10":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,22.0,0.0,32.0,4.0,23.0,10.0,0.0,0.0,0.0,0.0,8.0,0.0,0.0]}},"id":"803ed771-2ba8-4a38-83e3-9773df22c327","type":"ColumnDataSource"},{"attributes":{"grid_line_alpha":{"value":0.3},"grid_line_color":{"value":"white"},"plot":{"id":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b55a5d4-48a2-43bc-9725-9796341bc3aa","type":"BasicTicker"}},"id":"decc3ade-d3a3-46cd-aac8-52a4e8b60e94","type":"Grid"},{"attributes":{"axis_label":"Nombre total de semaines avec un titre class\u00e9 dans le Top 10","axis_label_text_color":{"value":"white"},"axis_line_color":{"value":"white"},"formatter":{"id":"aa2cdbde-30e1-417e-86b7-2b7c0b075f17","type":"BasicTickFormatter"},"major_label_text_color":{"value":"white"},"minor_tick_line_color":{"value":"white"},"plot":{"id":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"11d9a68f-a4be-461d-91e8-0a92bf22caab","type":"BasicTicker"}},"id":"2f5aae7f-85bf-4ab0-8f07-a1e0265b3b3e","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#3E3636"},"border_line_color":{"value":"#3E3636"},"items":[{"id":"a549e169-c68a-4f17-9f44-7a8c1d3349ed","type":"LegendItem"},{"id":"7b1f32a8-5f0d-409e-abde-166241e96fa0","type":"LegendItem"},{"id":"cd024185-a3e4-4898-b89c-a5a771ade366","type":"LegendItem"}],"label_text_color":{"value":"white"},"location":"top_left","orientation":"horizontal","plot":{"id":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4","subtype":"Figure","type":"Plot"}},"id":"6a9975ae-b8b5-44ea-95c6-7a4ef9a0ea2a","type":"Legend"},{"attributes":{"callback":null,"column_names":["Year","Artist","top10","Album","index","Track"],"data":{"Album":["Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Pas d'album dans le top","Music of the Sun","A Girl Like Me","Good Girl Gone Bad","Good Girl Gone Bad : The Remixes","Rated R","Rated R","Loud","Talk That Talk","Unapologetic","Pas d'album dans le top","B**** Better Have My Money","Pas d'album dans le top"],"Artist":["Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna","Rihanna"],"Track":["Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","Pas de titre dans le top","If It's Lovin' You Want","SOS","Shut Up And Drive","Don't Stop The Music","Rehab","Rockstar 101","You Da One","Birthday Cake","Pour It Up","Pas de titre dans le top","B**** Better Have My Money","Pas de titre dans le top"],"Year":[1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,19707,19965,20200,20447,20686,20888,21116,21332,21562,25,21950,26],"top10":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,11.0,14.0,24.0,40.0,1.0,46.0,52.0,26.0,16.0,0.0,9.0,0.0]}},"id":"9992d113-569a-41bb-839c-298cf5c6f6d9","type":"ColumnDataSource"}],"root_ids":["0f30ed32-3d7a-4386-b625-8eb903b9a0c4"]},"title":"Bokeh Application","version":"0.12.3"}};
                var render_items = [{"docid":"4f9e68af-f15e-4272-815d-0cf57e19839c","elementid":"5bd6b217-1c77-4dca-b532-0b2ec9449710","modelid":"0f30ed32-3d7a-4386-b625-8eb903b9a0c4"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
            });
        });