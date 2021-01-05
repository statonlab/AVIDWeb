<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsQuarantinedColumnsToPlotAndPlantTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plots', function (Blueprint $table) {
            $table->boolean('is_quarantined')->default(false);
        });

        Schema::table('plants', function (Blueprint $table) {
            $table->boolean('is_quarantined')->default(false);
        });

        Schema::table('measurements', function (Blueprint $table) {
            $table->boolean('is_quarantined')->default(false);
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
            $table->dropColumn('is_quarantined');
        });

        Schema::table('plants', function (Blueprint $table) {
            $table->dropColumn('is_quarantined');
        });

        Schema::table('measurements', function (Blueprint $table) {
            $table->boolean('is_quarantined')->default(false);
        });
    }
}