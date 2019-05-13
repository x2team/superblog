<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function add(Request $request){
    	$this->validate($request, [
    		'name' => 'required|min:2|max:50',

    	]);
    	$category = new Category();
    	$category->name = $request->name;

    	return $request->all();
    }
}
