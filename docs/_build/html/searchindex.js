Search.setIndex({docnames:["api/hydrostats.analyze.make_table","api/hydrostats.analyze.time_lag","api/hydrostats.data.daily_average","api/hydrostats.data.daily_std_dev","api/hydrostats.data.daily_std_error","api/hydrostats.data.merge_data","api/hydrostats.data.monthly_average","api/hydrostats.data.monthly_std_dev","api/hydrostats.data.monthly_std_error","api/hydrostats.data.remove_nan_df","api/hydrostats.data.seasonal_period","api/hydrostats.metrics.acc","api/hydrostats.metrics.d","api/hydrostats.metrics.d1","api/hydrostats.metrics.d1_p","api/hydrostats.metrics.dmod","api/hydrostats.metrics.dr","api/hydrostats.metrics.drel","api/hydrostats.metrics.ed","api/hydrostats.metrics.g_mean_diff","api/hydrostats.metrics.h10_ahe","api/hydrostats.metrics.h10_mhe","api/hydrostats.metrics.h10_rmshe","api/hydrostats.metrics.h1_ahe","api/hydrostats.metrics.h1_mhe","api/hydrostats.metrics.h1_rmshe","api/hydrostats.metrics.h2_ahe","api/hydrostats.metrics.h2_mhe","api/hydrostats.metrics.h2_rmshe","api/hydrostats.metrics.h3_ahe","api/hydrostats.metrics.h3_mhe","api/hydrostats.metrics.h3_rmshe","api/hydrostats.metrics.h4_ahe","api/hydrostats.metrics.h4_mhe","api/hydrostats.metrics.h4_rmshe","api/hydrostats.metrics.h5_ahe","api/hydrostats.metrics.h5_mhe","api/hydrostats.metrics.h5_rmshe","api/hydrostats.metrics.h6_ahe","api/hydrostats.metrics.h6_mhe","api/hydrostats.metrics.h6_rmshe","api/hydrostats.metrics.h7_ahe","api/hydrostats.metrics.h7_mhe","api/hydrostats.metrics.h7_rmshe","api/hydrostats.metrics.h8_ahe","api/hydrostats.metrics.h8_mhe","api/hydrostats.metrics.h8_rmshe","api/hydrostats.metrics.kge_2009","api/hydrostats.metrics.kge_2012","api/hydrostats.metrics.lm_index","api/hydrostats.metrics.maape","api/hydrostats.metrics.mae","api/hydrostats.metrics.male","api/hydrostats.metrics.mapd","api/hydrostats.metrics.mape","api/hydrostats.metrics.mase","api/hydrostats.metrics.mb_r","api/hydrostats.metrics.me","api/hydrostats.metrics.mean_var","api/hydrostats.metrics.mle","api/hydrostats.metrics.mse","api/hydrostats.metrics.msle","api/hydrostats.metrics.ned","api/hydrostats.metrics.nrmse_iqr","api/hydrostats.metrics.nrmse_mean","api/hydrostats.metrics.nrmse_range","api/hydrostats.metrics.nse","api/hydrostats.metrics.nse_mod","api/hydrostats.metrics.nse_rel","api/hydrostats.metrics.pearson_r","api/hydrostats.metrics.r_squared","api/hydrostats.metrics.rmse","api/hydrostats.metrics.rmsle","api/hydrostats.metrics.sa","api/hydrostats.metrics.sc","api/hydrostats.metrics.sga","api/hydrostats.metrics.sid","api/hydrostats.metrics.smape1","api/hydrostats.metrics.smape2","api/hydrostats.metrics.spearman_r","api/hydrostats.metrics.ve","api/hydrostats.metrics.watt_m","api/hydrostats.visual.hist","api/hydrostats.visual.plot","api/hydrostats.visual.qqplot","api/hydrostats.visual.scatter","index"],envversion:53,filenames:["api\\hydrostats.analyze.make_table.rst","api\\hydrostats.analyze.time_lag.rst","api\\hydrostats.data.daily_average.rst","api\\hydrostats.data.daily_std_dev.rst","api\\hydrostats.data.daily_std_error.rst","api\\hydrostats.data.merge_data.rst","api\\hydrostats.data.monthly_average.rst","api\\hydrostats.data.monthly_std_dev.rst","api\\hydrostats.data.monthly_std_error.rst","api\\hydrostats.data.remove_nan_df.rst","api\\hydrostats.data.seasonal_period.rst","api\\hydrostats.metrics.acc.rst","api\\hydrostats.metrics.d.rst","api\\hydrostats.metrics.d1.rst","api\\hydrostats.metrics.d1_p.rst","api\\hydrostats.metrics.dmod.rst","api\\hydrostats.metrics.dr.rst","api\\hydrostats.metrics.drel.rst","api\\hydrostats.metrics.ed.rst","api\\hydrostats.metrics.g_mean_diff.rst","api\\hydrostats.metrics.h10_ahe.rst","api\\hydrostats.metrics.h10_mhe.rst","api\\hydrostats.metrics.h10_rmshe.rst","api\\hydrostats.metrics.h1_ahe.rst","api\\hydrostats.metrics.h1_mhe.rst","api\\hydrostats.metrics.h1_rmshe.rst","api\\hydrostats.metrics.h2_ahe.rst","api\\hydrostats.metrics.h2_mhe.rst","api\\hydrostats.metrics.h2_rmshe.rst","api\\hydrostats.metrics.h3_ahe.rst","api\\hydrostats.metrics.h3_mhe.rst","api\\hydrostats.metrics.h3_rmshe.rst","api\\hydrostats.metrics.h4_ahe.rst","api\\hydrostats.metrics.h4_mhe.rst","api\\hydrostats.metrics.h4_rmshe.rst","api\\hydrostats.metrics.h5_ahe.rst","api\\hydrostats.metrics.h5_mhe.rst","api\\hydrostats.metrics.h5_rmshe.rst","api\\hydrostats.metrics.h6_ahe.rst","api\\hydrostats.metrics.h6_mhe.rst","api\\hydrostats.metrics.h6_rmshe.rst","api\\hydrostats.metrics.h7_ahe.rst","api\\hydrostats.metrics.h7_mhe.rst","api\\hydrostats.metrics.h7_rmshe.rst","api\\hydrostats.metrics.h8_ahe.rst","api\\hydrostats.metrics.h8_mhe.rst","api\\hydrostats.metrics.h8_rmshe.rst","api\\hydrostats.metrics.kge_2009.rst","api\\hydrostats.metrics.kge_2012.rst","api\\hydrostats.metrics.lm_index.rst","api\\hydrostats.metrics.maape.rst","api\\hydrostats.metrics.mae.rst","api\\hydrostats.metrics.male.rst","api\\hydrostats.metrics.mapd.rst","api\\hydrostats.metrics.mape.rst","api\\hydrostats.metrics.mase.rst","api\\hydrostats.metrics.mb_r.rst","api\\hydrostats.metrics.me.rst","api\\hydrostats.metrics.mean_var.rst","api\\hydrostats.metrics.mle.rst","api\\hydrostats.metrics.mse.rst","api\\hydrostats.metrics.msle.rst","api\\hydrostats.metrics.ned.rst","api\\hydrostats.metrics.nrmse_iqr.rst","api\\hydrostats.metrics.nrmse_mean.rst","api\\hydrostats.metrics.nrmse_range.rst","api\\hydrostats.metrics.nse.rst","api\\hydrostats.metrics.nse_mod.rst","api\\hydrostats.metrics.nse_rel.rst","api\\hydrostats.metrics.pearson_r.rst","api\\hydrostats.metrics.r_squared.rst","api\\hydrostats.metrics.rmse.rst","api\\hydrostats.metrics.rmsle.rst","api\\hydrostats.metrics.sa.rst","api\\hydrostats.metrics.sc.rst","api\\hydrostats.metrics.sga.rst","api\\hydrostats.metrics.sid.rst","api\\hydrostats.metrics.smape1.rst","api\\hydrostats.metrics.smape2.rst","api\\hydrostats.metrics.spearman_r.rst","api\\hydrostats.metrics.ve.rst","api\\hydrostats.metrics.watt_m.rst","api\\hydrostats.visual.hist.rst","api\\hydrostats.visual.plot.rst","api\\hydrostats.visual.qqplot.rst","api\\hydrostats.visual.scatter.rst","index.rst"],objects:{"hydrostats.analyze":{make_table:[0,1,1,""],time_lag:[1,1,1,""]},"hydrostats.data":{daily_average:[2,1,1,""],daily_std_dev:[3,1,1,""],daily_std_error:[4,1,1,""],merge_data:[5,1,1,""],monthly_average:[6,1,1,""],monthly_std_dev:[7,1,1,""],monthly_std_error:[8,1,1,""],remove_nan_df:[9,1,1,""],seasonal_period:[10,1,1,""]},"hydrostats.metrics":{acc:[11,1,1,""],d1:[13,1,1,""],d1_p:[14,1,1,""],d:[12,1,1,""],dmod:[15,1,1,""],dr:[16,1,1,""],drel:[17,1,1,""],ed:[18,1,1,""],g_mean_diff:[19,1,1,""],h10_ahe:[20,1,1,""],h10_mhe:[21,1,1,""],h10_rmshe:[22,1,1,""],h1_ahe:[23,1,1,""],h1_mhe:[24,1,1,""],h1_rmshe:[25,1,1,""],h2_ahe:[26,1,1,""],h2_mhe:[27,1,1,""],h2_rmshe:[28,1,1,""],h3_ahe:[29,1,1,""],h3_mhe:[30,1,1,""],h3_rmshe:[31,1,1,""],h4_ahe:[32,1,1,""],h4_mhe:[33,1,1,""],h4_rmshe:[34,1,1,""],h5_ahe:[35,1,1,""],h5_mhe:[36,1,1,""],h5_rmshe:[37,1,1,""],h6_ahe:[38,1,1,""],h6_mhe:[39,1,1,""],h6_rmshe:[40,1,1,""],h7_ahe:[41,1,1,""],h7_mhe:[42,1,1,""],h7_rmshe:[43,1,1,""],h8_ahe:[44,1,1,""],h8_mhe:[45,1,1,""],h8_rmshe:[46,1,1,""],kge_2009:[47,1,1,""],kge_2012:[48,1,1,""],lm_index:[49,1,1,""],maape:[50,1,1,""],mae:[51,1,1,""],male:[52,1,1,""],mapd:[53,1,1,""],mape:[54,1,1,""],mase:[55,1,1,""],mb_r:[56,1,1,""],me:[57,1,1,""],mean_var:[58,1,1,""],mle:[59,1,1,""],mse:[60,1,1,""],msle:[61,1,1,""],ned:[62,1,1,""],nrmse_iqr:[63,1,1,""],nrmse_mean:[64,1,1,""],nrmse_range:[65,1,1,""],nse:[66,1,1,""],nse_mod:[67,1,1,""],nse_rel:[68,1,1,""],pearson_r:[69,1,1,""],r_squared:[70,1,1,""],rmse:[71,1,1,""],rmsle:[72,1,1,""],sa:[73,1,1,""],sc:[74,1,1,""],sga:[75,1,1,""],sid:[76,1,1,""],smape1:[77,1,1,""],smape2:[78,1,1,""],spearman_r:[79,1,1,""],ve:[80,1,1,""],watt_m:[81,1,1,""]},"hydrostats.visual":{hist:[82,1,1,""],plot:[83,1,1,""],qqplot:[84,1,1,""],scatter:[85,1,1,""]},hydrostats:{analyze:[86,0,0,"-"],data:[86,0,0,"-"],metrics:[86,0,0,"-"],test:[86,0,0,"-"],visual:[86,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:function"},terms:{"15min":5,"30min":5,"45min":5,"\u03c0":50,"boolean":[11,14,18,51,52,57,59,60,61,62,71],"case":[5,11],"default":[15,55,69,79],"float":[5,11,14,18,51,52,57,59,60,61,62,69,71],"function":[0,1,5,49,56,83,84],"import":57,"int":69,"new":[56,60,69],"return":[1,2,3,4,6,7,8,10,11,12,13,14,15,16,17,19,49,50,53,54,55,56,63,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,81],"t\u00f6rnqvist":[52,59,61],"true":[18,51,52,57,59,60,61,62,69,71],"try":86,"yrj\u00f6":[52,59,61],For:[51,57],Has:0,Res:[67,68],The:[5,14,49,51,52,54,57,59,61,63,64,65,69,79,86],There:5,Use:[51,67,68],Useful:84,Using:55,With:69,___:76,abl:86,abolut:51,absolut:[50,51,52,53,54,55,77,78],accept:5,account:5,accuraci:[57,73,74],add:0,adv:[67,68],advantag:51,against:69,agreement:[12,13,14,15,16,17],alan:60,all:[0,1,69],allan:11,allow:[63,64,65,69],along:69,alreadi:69,also:[0,18,51,60,62,71],altern:69,american:[52,59,61],anaconda:86,analysi:1,analyz:[0,1],angl:[73,75],ani:5,anomali:11,answer:54,applic:18,approach:56,arang:57,arctang:50,argument:[0,1,5,12,13,15,16,17,53,54,55,56,66,67,68,70,72,73,74,75,76,77,78,81,84],arr:69,arrai:[10,11,12,13,14,15,16,17,18,51,52,53,54,55,56,57,59,60,61,62,66,67,68,69,70,71,72,73,74,75,76,77,78,81],array_lik:69,assert:69,assess:[51,67,68],assum:55,astronom:57,author:86,avail:86,averag:[2,6,14,49,51,69,79],avoid:72,axes:69,axi:69,backend:86,balanc:57,base:[67,68],been:5,berri:56,best_fit:85,better:[14,18,49,50,51,52,57,59,60,61,62,71,80],between:[5,10,18,51,57,62,63,64,65,71],bia:[14,18,49,50,51,52,57,59,60,61,62,80],blob:83,bool:69,both:[2,3,4,6,7,8],bovik:60,boyl:[67,68],broadcast:69,buffer:69,calcul:[2,3,4,6,7,8,69,72],call:69,can:[0,10,57,69,86],cancel:[51,60,71],cast:69,chang:[52,59,61],check:1,circuit:[73,74],climat:[51,81],climatolog:81,closer:[57,59],coeffici:[11,70,79],column:[0,2,3,4,5,6,7,8],column_nam:5,com:83,combin:5,come:84,command:86,compar:[0,84],comparison:[63,64,65,67,68],comput:[18,51,52,57,59,60,61,62,69,71],conceptu:66,consid:5,contain:69,content:69,convert:69,copi:69,correctli:[69,86],correl:[11,74,79],cort:51,cours:[2,3,4,6,7,8],creat:[0,86],criss:80,criteria:[67,68],csv:[0,5],cumul:[11,57],d1_p_obs_bar_p:[0,1],dai:5,daili:[2,3,4],daily_period:10,data:[0,2,3,4,5,6,7,8,9,10,11,14,18,49,50,51,52,55,57,59,60,61,62,63,64,65,69,71,73,74,83,84],datafram:[1,2,3,4,5,6,7,8,9,10],dataset:[1,84],date:[2,3,4,5,6,7,8],datetim:[2,3,4,5,6,7,8],dec:86,delta:5,determin:[57,70],determinist:11,deviat:[3,7,53],differ:[0,1,5,19,51,57,63,64,65,67,68],dimens:[51,69],dimension:[18,51,52,57,59,60,61,62,71,81],discuss:66,distanc:[18,56,62],distribut:84,dmod_j:[0,1],doc:83,document:[0,1,83,84],doe:[14,18,49,50,51,52,60,61,62,80],drop:9,dynam:11,each:72,ebar:83,ecohydrolog:18,ecolor:83,edward:11,effici:[49,66,67,68],either:[0,10,86],element:69,empti:5,epstein:11,error:[1,4,8,50,51,52,54,55,57,59,60,61,63,64,65,69,71,72,77,78,80],erroreveri:83,estim:18,euclidean:18,euclidian:62,evalu:[51,67,68],even:[57,69],evenli:[52,59,61],examin:57,exampl:[0,1,57],excel:0,expect:69,experi:11,explan:[0,1],extend:11,fals:[0,1,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],fidel:60,fig_siz:83,figsiz:[1,82,84,85],file:5,fill:5,first:5,fisher:57,fit:[51,57,67,68],flatten:69,float64:69,flow:[52,66,80],follow:86,forecast:[11,18,51,52,57,59,60,61,62,66,71],forecasted_arrai:[18,51,52,57,59,60,61,62,71],form:57,format:[2,3,4,5,6,7,8],framework:86,freeli:86,from:[9,11,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,51,52,57,59,60,61,62,71,84],full:[0,1,84],fulli:69,geograph:51,geometr:19,geosci:[67,68],gershman:[73,74],github:[0,1,83],given:[14,18,49,51,52,57,59,60,61,62,69,71],good:[67,68],gradient:75,grid:[82,83,85],h10:[20,21,22],h6_ahe_k:[0,1],h6_mhe_k:[0,1],h6_rmshe_k:[0,1],handl:50,has:[0,86],have:[5,69],header:5,hembre:11,hemispher:11,high:[52,59,61],highlight:[60,71],hold:69,hour:5,how:[0,52,59,61],http:[0,1,83],hydroclimat:[67,68],hydrolog:[18,66,67,68],hydrostat:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],hydrostatsvisualplot:83,hyndman:71,hyperspectr:[73,74],ieee:[60,73,74],impact:[52,59,61],increas:72,index:[2,3,4,6,7,8,12,13,14,15,16,17,49,86],indic:[11,14,18,49,50,51,52,57,59,60,61,62,71,80],inf:[9,11,14,18,51,52,57,59,60,61,62,71],inform:[51,86],input:[11,14,69],instead:[14,49,69],integ:69,intern:[51,73,74,81],interp_freq:1,interp_typ:[1,5],interpol:[5,51,84],interquartil:63,issc:[73,74],jan:86,join:5,journal:[51,66,81],june:86,keepdim:69,kenji:51,kennard:18,kim:50,koehler:71,kraus:[67,68],label:[82,83,85],lag:1,langland:11,larg:57,larger:[14,49,60,71],latitud:11,least:[63,64,65],leav:[5,60],left:[69,83],legat:[14,49,67,68],legend:[82,83,84],length:69,leo:[52,59,61],less:[14,49,50],librari:86,like:5,limit:[52,59,61],line45:85,linear:84,linestyl:83,list:84,lm_x_obs_bar_p:[0,1],locat:0,log:[52,59,61,72],log_scal:85,look:60,love:60,low:[52,59,61],mac:86,mackai:18,mae:[52,57],magazin:60,mape:50,marker_styl:85,markers:83,markeveri:83,marsh:18,mase_m:[0,1],master:83,match:[0,5,73,74],mathemat:57,matsuura:[51,71],maue:11,max:1,mccabe:[14,49,67,68],mean:[14,19,50,51,52,53,54,55,57,59,60,61,63,64,65,69,71,72,77,78],measur:[51,52,57,59,60,61,67,68,81],median:69,medium:11,memori:69,merg:5,merged_data:[2,3,4,6,7,8],merged_data_df:[82,83,84,85],merged_datafram:[0,1,9,10],meteorolog:11,method:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,56,57,79],metric:[0,1,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,83,85],mid:11,middl:69,mielk:56,min:1,miyakoda:11,model:[11,51,66,67,68,81],modifi:[15,67,69],monthli:[6,7,8,11,57],more:[52,59,61,86],most:[63,64,65],mse:61,murphi:11,must:69,nan:[9,11,14,18,51,52,57,59,60,61,62,71,72],nash:[66,67,68],ndarrai:[18,51,52,57,59,60,61,62,69,71],necessari:69,need:69,neg:[9,11,14,18,51,52,57,59,60,61,62,71],nois:57,non:[55,81],none:[0,1,5,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],norm:[18,51,60,62,71],normal:[62,63,64,65],northern:11,note:[5,18,51,52,57,59,60,61,62,71,72],notic:57,nrmse:63,nrmsequartil:[63,64,65],nrmserang:[63,64,65],nse_mod_j:[0,1],num_bin:82,number:[1,5,11,14,18,51,52,57,59,60,61,62,71],numpi:[10,11,57],object:69,obs:57,obs_arrai:[82,84,85],obs_bar_p:[14,49],obs_df:5,obs_fpath:5,observ:[0,5,11,12,13,14,15,16,17,18,49,50,51,52,53,54,55,56,57,59,60,61,62,63,64,65,66,67,68,70,71,72,73,74,75,76,77,78,81,83,84],observed_arrai:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],observed_tz:5,oceanographi:11,odd:69,offici:[0,1],olden:18,one:[18,51,52,57,59,60,61,62,69,71,72,86],onli:[5,52,59,61],option:[0,18,51,52,57,59,60,61,62,69,71],order:[0,72,79],origin:[51,57,69],other:[5,14,49,86],otherwis:69,out:69,outlier:[14,49,52,59,61,63,64,65],output:69,over:[2,3,4,6,7,8,50,51],overwrite_input:69,packag:[],panda:[5,9,10],param:[11,14,79],paramet:[11,14,18,51,52,57,59,60,61,62,71,79],part:66,partial:69,pchip:[1,5],pentti:[52,59,61],percentag:[50,53,54,77,78,80],percentil:69,perform:[11,51,81],period:[0,10,55],permut:56,pip:86,place:69,pleas:[5,86],plot:84,plot_adjust:83,plot_titl:1,pontiu:[63,64,65],posit:[1,57],possibl:5,potenti:1,predict:[2,3,4,6,7,8,18,50],preprocess:86,preserv:69,principl:66,prob_den:82,probabl:69,process:[60,73,74],pusei:18,pypi:86,python:86,quantifi:18,quantil:84,rais:69,rand:57,random:[51,57,60,71],rang:[10,11,14,18,49,50,51,52,57,59,60,61,62,63,65,71,80],rank:79,ratio:[52,59,61],readm:83,recent:11,record:[2,3,4,6,7,8],reduc:69,refer:[18,51,52,57,59,60,61,62,71],refin:16,reinstal:86,rel:[17,52,59,61,68],remov:[11,14,18,51,52,57,59,60,61,62,71],remove_neg:[0,1,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,84],remove_zero:[0,1,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,84],replac:[11,14,18,51,52,57,59,60,61,62,71],replace_inf:[0,1,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,84],replace_nan:[0,1,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,84],repositori:86,repres:50,research:[18,51],resour:[67,68],respect:[63,64,65],result:[11,69],review:11,river:[18,66],rmse:[51,63,64,65],robert:86,robila:[73,74],rolf:11,root:[51,63,64,65,71,72],row:[5,9],royal:57,run:[1,72],runtimeerror:86,ryan:11,same:[52,59,61,69,84],save:[0,69],save_fig:1,savefigur:[82,83,84,85],scale:[55,63,64,65],scenario:5,scienc:51,scipi:79,score:11,season:[0,10,14,49,55],seasonal_period:0,second:5,see:[0,1,83,84,86],select:[5,14,49],sensit:[63,64,65],sequenc:69,seri:[5,10,11,18,51,52,57,59,60,61,62,63,64,65,71],set:[63,64,65,69],shape:69,shift_rang:1,should:[52,59,61],show:83,shulman:11,signal:[60,73,74],sim:57,sim_arrai:[82,84,85],sim_df:5,sim_fpath:5,simpli:5,simul:[0,5,12,13,14,15,16,17,18,51,52,53,54,55,56,57,59,60,61,62,66,67,68,70,71,72,73,74,75,76,77,78,81,83,84],simulated_arrai:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],simulated_tz:5,sinc:69,size:69,skew:57,skill:11,small:57,smaller:[18,50,51,52,57,60,61,62,69,71,80],societi:57,sometim:[18,62],sort:69,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],space:[5,18,62],spatial:51,spearman:79,specifi:[0,10,69,83],spectral:[73,74,75],springer:56,squar:[51,52,57,60,61,62,63,64,65,71,72],standard:[3,4,7,8],station:1,statistician:[52,59,61],streamflow:[2,3,4,5,6,7,8],strickler:11,studi:18,support:69,sutcliff:[66,67,68],symmetr:[77,78],symposium:[73,74],system:[73,74],tabl:0,take:[2,3,4,5,6,7,8],tell:5,tellu:11,term:[14,49,52,59,61],text_adjust:83,than:69,them:5,thi:[5,18,57,62,64,65,69,71],third:5,three:5,through:66,throughout:1,tight_xlim:83,time:[1,5,10,11,18,51,52,57,59,60,61,62,63,64,65,71,72,83],time_rang:10,timeseri:86,timezon:5,titl:[82,83,84,85],to_csv:[0,1],to_excel:[0,1],tool:86,tornqvist:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],transpar:83,treat:69,two:[2,3,4,5,6,7,8,10,18,51,52,57,59,60,61,62,69,71,84],type:[2,3,4,5,6,7,8,69],uncertainti:18,undefin:69,under:50,unit:[14,49,50,51,52,57,59,60,61,72],unitless:80,use:[5,49,52,59,61,69],used:14,user:[0,11,14,86],using:86,v_sort:69,valid:[67,68],valu:[1,2,3,4,5,6,7,8,9,11,14,18,50,51,52,56,57,59,60,61,62,66,67,68,69,71,72,81],vartia:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,59,61],vector:[18,62,69],veri:57,verif:11,verlag:56,version:69,versionad:69,virtualenv:86,visual:[82,83,84,85],wade:86,waderoberts123:[0,1,83],wang:60,want:[5,11,14],water:[67,68],watterson:81,weather:11,weight:[14,49,52,59,61],well:[0,1],what:[11,14],when:[5,69],where:55,whether:[11,14,84],which:[5,18,51,52,57,59,60,61,62,69,71],willmott:[51,71],winston:80,winter:11,work:86,workbook:0,would:5,x_season:83,xlabel:[1,84],ylabel:[1,84],york:56,you:[5,69],your:5,z_norm:82,zero:[9,11,14,18,51,52,57,59,60,61,62,71],zeros_lik:69,zhou:60,zone:5},titles:["make_table","time_lag","daily_average","daily_std_dev","daily_std_error","merge_data","monthly_average","monthly_std_dev","monthly_std_error","remove_nan_df","seasonal_period","acc","d","d1","d1_p","dmod","dr","drel","ed","g_mean_diff","h10_ahe","h10_mhe","h10_rmshe","h1_ahe","h1_mhe","h1_rmshe","h2_ahe","h2_mhe","h2_rmshe","h3_ahe","h3_mhe","h3_rmshe","h4_ahe","h4_mhe","h4_rmshe","h5_ahe","h5_mhe","h5_rmshe","h6_ahe","h6_mhe","h6_rmshe","h7_ahe","h7_mhe","h7_rmshe","h8_ahe","h8_mhe","h8_rmshe","kge_2009","kge_2012","lm_index","maape","mae","male","mapd","mape","mase","mb_r","me","mean_var","mle","mse","msle","ned","nrmse_iqr","nrmse_mean","nrmse_range","nse","nse_mod","nse_rel","pearson_r","r_squared","rmse","rmsle","sa","sc","sga","sid","smape1","smape2","spearman_r","ve","watt_m","hist","plot","qqplot","scatter","Welcome to hydrostats\u2019s documentation!"],titleterms:{"function":86,acc:11,analyz:86,content:[],d1_p:14,daily_averag:2,daily_std_dev:3,daily_std_error:4,data:86,dmod:15,document:86,drel:17,g_mean_diff:19,h10_ahe:20,h10_mhe:21,h10_rmshe:22,h1_ahe:23,h1_mhe:24,h1_rmshe:25,h2_ahe:26,h2_mhe:27,h2_rmshe:28,h3_ahe:29,h3_mhe:30,h3_rmshe:31,h4_ahe:32,h4_mhe:33,h4_rmshe:34,h5_ahe:35,h5_mhe:36,h5_rmshe:37,h6_ahe:38,h6_mhe:39,h6_rmshe:40,h7_ahe:41,h7_mhe:42,h7_rmshe:43,h8_ahe:44,h8_mhe:45,h8_rmshe:46,hist:82,hydrostat:86,instal:86,kge_2009:47,kge_2012:48,lm_index:49,maap:50,mae:51,make_t:0,male:52,mapd:53,mape:54,mase:55,mb_r:56,mean_var:58,merge_data:5,metric:86,mle:59,modul:86,monthly_averag:6,monthly_std_dev:7,monthly_std_error:8,mse:60,msle:61,ned:62,nrmse_iqr:63,nrmse_mean:64,nrmse_rang:65,nse:66,nse_mod:67,nse_rel:68,packag:86,pearson_r:69,plot:83,qqplot:84,r_squar:70,remove_nan_df:9,rmse:71,rmsle:72,scatter:85,seasonal_period:10,sga:75,sid:76,smape1:77,smape2:78,spearman_r:79,submodul:[],test:86,time_lag:1,visual:86,watt_m:81,welcom:86}})