import Head from 'next/head'
import React from 'react'
import Link from 'next/link';

import marked from  'marked'

import LibTask from '../../libs/LibTask';
import Layout from '../../components/layout'
import LibCommon from '../../libs/LibCommon'
import LibCms from '../../libs/LibCms'
//
export default function Page({ blog }) {
  // console.log(blog)
  return (
    <Layout>
    <Head><title key="title">{blog.title}</title></Head>      
    <div className="container">
      <Link href="/" >
        <a className="btn btn-outline-primary mt-2">Back</a>
      </Link>
      <hr className="mt-2 mb-2" />
      <div className="show_head_wrap">
          <i className="fas fa-home"></i> >
          {blog.title}
      </div>
      <hr /> 
      <h1>{blog.title}</h1>
      Date: {blog.created_at}<br />
      <hr />
      <div id="post_item" dangerouslySetInnerHTML={{__html: `${blog.content}`}}></div>
      <hr />                 
    </div>
    <style>{`
      div#post_item > p > img{
        max-width : 100%;
        height : auto;
      }
      div#post_item > hr {
        height: 1px;
        background-color: #000;
        border: none;
      }
      .show_head_wrap{ font-size: 1.4rem; }
      `}</style>      
  </Layout>
  )
}
//
export const getStaticPaths = async () => {
  var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  var url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  var page_items = json.page_items
  var paths = []
  page_items.map((item, index) => {
    var row = { params: 
      { id: item.save_id } 
    }
    paths.push(row)
  })
//console.log(page_items)
  return {
    paths: paths,
    fallback: false
  } 
};
export const getStaticProps = async context => {
  const id = context.params.id
console.log(id)
  var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  var url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  var items = json.page_items 
  items = LibCommon.convert_items(items)
  var item  = LibCms.get_page_item( items, String(id) )
  item.content = marked(item.content)
//console.log(item )  
// console.log(json_categ)
  return {
    props: { 
      blog: item,
//      category_name: category_name
    },
  }
  
};
