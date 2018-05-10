<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    // Alias to function above
    public function home()
    {
        return $this->index();
    }

    /**
     * Show the crypto dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function crypto()
    {
        return view('crypto');
    }

    /**
     * Show the user's profile
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
//        dd(request()->user()->incrementing);
        return view('profile')->with('user', request()->user());
    }
}
