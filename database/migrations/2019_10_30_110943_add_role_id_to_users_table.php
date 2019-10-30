<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRoleIdToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('role_id')->nullable()->after('id');

            $table->foreign('role_id')
                ->references('id')
                ->on('roles')
                ->onUpdate('cascade');
        });

        \App\User::whereNull('role_id')->update([
            'role_id' => \App\Role::where('is_default', true)->first()->id,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);

            $table->dropColumn('role_id');
        });
    }
}
