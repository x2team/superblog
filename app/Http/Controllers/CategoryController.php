<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
 
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }
    public function add(Request $request){
    	$this->validate($request, [
    		'name' => 'required|min:2|max:50|unique:categories',

    	]);
    	$category = new Category();
    	$category->name = $request->name;
    	$category->save();
    	return $request->all();
    }

    public function all(Request $request){
    	$categories = Category::all();

    	return response()->json([
    		'categories' => $categories
    	], 200);

        // dump($abc);

        // return $abc;
    }

    public function delete($id){
    	//return $id;
    	$category = Category::findOrFail($id);
    	$category->delete();
    }

    public function edit ($id){
    	// return $id;
    	$category = Category::findOrFail($id);
    	
    	return response()->json([
    		'category' => $category,
    	], 200);
    }

    public function update (Request $request, $id){
    	$category = Category::findOrFail($id);
    	$this->validate($request, [
    		'name' => 'required|min:2|max:50|unique:categories,name,'.$category->id,

    	]);

    	
    	$category->name = $request->name;
    	$category->save();

    }

    public function deletecategory($ids){
        $all_id = explode(",", $ids);

        foreach($all_id as $id){
            $category = Category::findOrFail($id);
            $category->delete();
        }
    }

}
