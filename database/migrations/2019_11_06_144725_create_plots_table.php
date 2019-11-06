<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plots', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('site_id');
            $table->integer('number');
            $table->double('latitude')->nullable();
            $table->double('longitude')->nullable();
            $table->double('basal_area')->nullable();
            $table->boolean('is_protected')->nullable();
            $table->string('ground_cover', 20)->nullable();
            $table->string('subcanopy', 20)->nullable();
            $table->string('canopy', 20)->nullable();
            $table->string('protection_seasons', 20)->nullable();

            $table->timestamps();

            $table->foreign('site_id')
                ->references('id')
                ->on('sites')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plots');
    }
}
