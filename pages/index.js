import React from 'react'
import Head from 'next/head';

import Layout from '../components/layout'
import TopHeadBox from '../components/TopHeadBox'
import PagingBox from '../components/PagingBox'
import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import LibCms from '../libs/LibCms'
import IndexRow from './IndexRow';
import PagesRow from './PagesRow';
import CategoryRow from './CategoryRow';
//
function Page(data) {
  var items = data.blogs
  var json = data.json
  var page_items = json.page_items
  var category_items = json.category_items
  var paginateDisp = data.display
// console.log( items )
  return (
  <Layout>
    <Head><title key="title">{data.site_name}</title></Head>      
    <TopHeadBox site_name={data.site_name} info_text={data.info_text} />
    <div className="body_main_wrap">
      <div className="container">
        <div className="btn_disp_ara_wrap mt-0">
          <div className="pages_wrap">
          <div className="row conte mt-0 mb-2">
            <div className="col-sm-12">
              <h2 className="h4_td_title mt-2" >Pages</h2>
              <div className="page_btn_wrap mb-0">
              {page_items.map((item, index) => {
  // console.log(item.show_id ,item.created_at )
              return (<PagesRow save_id={item.save_id} key={index} 
                title={item.title} />) 
              })}
              </div>
            </div>
          </div>
          <div className="category_wrap">
            <div className="row conte mt-2 mb-4">
              <div className="col-sm-12">
                <h2 className="h4_td_title mt-2" >Category</h2>
                <div className="category_btn_wrap mb-0">
                {category_items.map((item, index) => {
// console.log(item )
                  return (<CategoryRow id={item.save_id} key={index} 
                    name={item.name} />
                  )
                })}                    
                </div>
              </div>
            </div>
          </div>          
        </div>
        </div>
        <div className="body_wrap">
          <div id="post_items_box" className="row conte mt-2 mb-4">
            <div className="col-sm-12">
              <div id="div_news">
                <h2 className="h4_td_title mt-2 mb-2" >Post</h2>
              </div>
            </div>
            {items.map((item, index) => {
// console.log(item )
              var category_name = item.category.name
              return (<IndexRow key={index}
                id={item.id} save_id={item.save_id} title={item.title}
                date={item.created_at} category_name={category_name} />       
              )
            })}
            <hr />
            <PagingBox page="1" paginateDisp={paginateDisp} />
          </div>
        </div>          
      </div>
    </div>
  </Layout>
  )
}
//
export const getStaticProps = async context => {
  var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  var url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  var items = json.items 
//console.log("len=" , items.length )
  items =  LibCommon.get_reverse_items(items)
  LibPagenate.init()
  items = LibPagenate.getOnepageItems(items, 0 , 10)
  var display = LibPagenate.is_paging_display(items.length)      
  return {
    props : {
      blogs: items,
      json: json,
      site_name : process.env.MY_SITE_NAME,
      info_text : "Sample CMSの関連記事を公開予定しております。",        
      display: display
    }
  };
}

export default Page
