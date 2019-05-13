<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Category;
class PostController extends Controller
{
    public function all_post(){
    	$category = Category::find(3)->with('posts')->get();

    	return ( $category );
    
    
    }
}
