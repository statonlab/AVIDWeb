<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameColumnOwnerAddressInSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sites', function (Blueprint $table) {
            $table->renameColumn('owner_address', 'owner_contact');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('sites', 'owner_contact')) {
            Schema::table('sites', function (Blueprint $table) {
                $table->renameColumn('owner_contact', 'owner_address');
            });
        }
    }
}
