import React from 'react'
//import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/layout'
import TopHeadBox from '../../components/TopHeadBox'
import PagingBox from '../../components/PagingBox'
import IndexRow from '../IndexRow';
import LibPagenate from '../../libs/LibPagenate'
import LibCommon from '../../libs/LibCommon'
//
function Page(data) {
  var items = data.blogs
  var paginateDisp = data.display
  var page = data.page
//console.log("display=", data.display)  
  return (
    <Layout>
      <Head><title key="title">{data.site_name}</title></Head> 
      <TopHeadBox site_name={data.site_name} />
      <div className="body_main_wrap">
        <div className="container">
          <div className="body_wrap">
            <div id="post_items_box" className="row conte mt-2 mb-4">
              <div className="col-sm-12">
                <div id="div_news">
                  <h2 className="h4_td_title mt-2 mb-2" >Post</h2>
                </div>
              </div>
              {items.map((item, index) => {
//                console.log(item.id ,item.createdAt )
                return (<IndexRow key={index}
                  id={item.id} show_id={item.show_id} title={item.title}
                  date={item.created_at} />       
                )
              })}
              <hr /> 
              <PagingBox page={page} paginateDisp={paginateDisp} />            
            </div>
          </div>          
        </div>
      </div>
    </Layout>
    )  
}
//
export const getStaticProps = async context => {
  const page = context.params.id;
  LibPagenate.init()
  var pageInfo=LibPagenate.get_page_start(page)
//console.log("disp=" , display)
  var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  var url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  var items = json.items
  var item_len = items.length 
  items =  LibCommon.get_reverse_items(items)
  LibPagenate.init()
  items = LibPagenate.getOnepageItems(items, pageInfo.start , pageInfo.end )
// console.log(item_len)
  var display = LibPagenate.is_next_display(page, parseInt(item_len) )
  return {
    props : {
      blogs: items, display: display, page: page,
      site_name : process.env.MY_SITE_NAME,
    }
  };
}
export async function getStaticPaths() {
  var paths = []
  var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  var url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  var items = json.items 
  items =  LibCommon.get_reverse_items(items)  
  LibPagenate.init()
  var pageMax =LibPagenate.get_max_page(items.length)
  pageMax = Math.ceil(pageMax)
//console.log( "pageMax=", pageMax )
  for(var i= 1 ; i<= pageMax; i++ ){
    var item = {
      params : {
        id: String(i)
      } 
    }
    paths.push(item)
  }
//console.log( items )
  return {
    paths: paths,
    fallback: false,
  }
}

export default Page
