<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Category;
use Illuminate\Support\Facades\Auth;

use Image;

class PostController extends Controller
{
    public function all(){
    	
    	$posts = Post::with('user', 'category')->orderBy('id', 'desc')->get();

    	return response()->json([
    		'posts' => $posts
    	], 200);
    
    
    }

    public function add(Request $request){


    	//Save Image
    	$strpos = strpos($request->photo, ";"); // 14
    	$sub = substr($request->photo, 0, $strpos); //data:image/png;
    	$ex = explode('/', $sub)[1]; // png
    	$name = time().".".$ex; //132131.png


        //Khong co WaterMark
		$image = Image::make($request->photo);

        //Co' WaterMark
        // $watermark = Image::make(public_path('watermark.png'));
        // $image = Image::make(public_path('/test1.jpg'));
        // $image->insert($watermark, 'bottom-right', 10, 10);


		$image->save(public_path("upload/image/").$name);


    	$post = new Post();
    	$post->title = $request->title;
    	$post->description = $request->description;
    	$post->photo = $name;
    	$post->cat_id = $request->cat_id;
    	$post->user_id = Auth::user()->id;

    	$post->save();
    	//return response()->json(['post111' => $post], 200);
    }

    public function delete($id){
    	$post = Post::findOrFail($id);
        $image = public_path('upload/image/').$post->photo;
        if(file_exists($image)){
            @unlink($image);
        }
        $post->delete();
    }

    public function edit( $id){
        $post = Post::findOrFail($id);

        return response()->json([
            'post' => $post
        ], 200);
    }

    public function update(Request $request, $id){

        $post = Post::findOrFail($id);
       
        if($request->photo != $post->photo){
            $strpos = strpos($request->photo, ";"); // 14
            $sub = substr($request->photo, 0, $strpos); //data:image/png;
            $ex = explode('/', $sub)[1]; // png
            $name = time().".".$ex; //132131.png

            //Khong co WaterMark
            $image = Image::make($request->photo);
            $image->save(public_path("upload/image/").$name);

            //Xoa hinh cu
            $old_img = public_path('upload/image/').$post->photo;
            if(file_exists($old_img)){
                @unlink($old_img);
            }
        }
        else{
            $name = $post->photo;
        }

        $post->title = $request->title;
        $post->description = $request->description;
        $post->photo = $name;
        $post->cat_id = $request->cat_id;
        $post->user_id = Auth::user()->id;

        $post->save();
    }
}
