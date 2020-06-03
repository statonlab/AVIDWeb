<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeStringLengthForProtectionSeasonsColumnOnPlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plots', function (Blueprint $table) {
            $table->string('protection_seasons', 50)->nullable()->change();
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
            $table->string('protection_seasons', 20)->nullable()->change();
        });
    }
}
