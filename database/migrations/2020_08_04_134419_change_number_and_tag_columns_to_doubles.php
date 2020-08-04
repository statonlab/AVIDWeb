<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeNumberAndTagColumnsToDoubles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plots', function (Blueprint $table) {
            $table->float('number')->change();
        });

        Schema::table('plants', function (Blueprint $table) {
            $table->float('tag')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('plots', function (Blueprint $table) {
            $table->integer('number')->change();
        });

        Schema::table('plants', function (Blueprint $table) {
            $table->integer('tag')->nullable()->change();
        });
    }
}
