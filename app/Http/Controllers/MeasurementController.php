<?php

namespace App\Http\Controllers;

use App\Measurement;
use App\Plant;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MeasurementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Plant $plant
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index(Plant $plant, Request $request)
    {
        $this->authorize('view', $plant);

        $this->validate($request, [
            'order_by' => 'nullable|in:date,is_located,is_alive,height',
            'order_dir' => 'nullable|in:asc,desc',
        ]);

        $measurements = $this->with($plant->measurements())
            ->orderBy($request->order_by ?? 'date', $request->order_dir ?? 'desc')
            ->paginate(20);

        return $this->success($measurements);
    }

    /**
     * @param \Illuminate\Database\Eloquent\Relations\HasMany|Measurement $measurement
     * @return \App\Measurement|\Illuminate\Database\Eloquent\Relations\HasMany
     */
    protected function with($measurement)
    {
        $load = [
            'user' => function ($query) {
                $query->select(['users.id', 'users.name']);
            },
        ];

        if ($measurement instanceof Measurement) {
            return $measurement->load($load);
        }

        return $measurement->with($load);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Measurement $measurement
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Measurement $measurement)
    {
        $this->authorize('view', $measurement);

        $this->with($measurement);

        return $this->success($measurement);
    }

    /**
     * Store a new resource.
     *
     * @param Plant $plant
     * @param Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Plant $plant, Request $request)
    {
        $this->authorize('update', $plant);

        $this->validate($request, [
            'date' => 'required|date_format:Y-m-d',
            'is_located' => 'required|boolean',
        ]);

        if ($request->is_located == 1) {
            $this->validate($request, [
                'height' => 'required|numeric',
                'is_alive' => 'required|boolean',
            ]);
        }

        /** @var \App\User $user */
        $user = $request->user();
        $measurement = Measurement::create([
            'plant_id' => $plant->id,
            'plot_id' => $plant->plot->id,
            'site_id' => $plant->plot->site_id,
            'user_id' => $user->id,
            'is_located' => $request->is_located == 1,
            'date' => Carbon::createFromFormat('Y-m-d', $request->date),
            'height' => $request->is_located == 1 ? $request->height : null,
            'is_alive' => $request->is_located == 1 ? $request->is_alive == 1 : null,
        ]);

        $this->with($measurement);

        return $this->created($measurement);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Measurement $measurement
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Measurement $measurement)
    {
        $this->authorize('update', $measurement);

        $this->validate($request, [
            'date' => 'required|date_format:Y-m-d',
            'is_located' => 'required|boolean',
        ]);

        if ($request->is_located == 1) {
            $this->validate($request, [
                'height' => 'required|numeric',
                'is_alive' => 'required|boolean',
            ]);
        }

        $measurement->fill([
            'is_located' => $request->is_located,
            'date' => Carbon::createFromFormat('Y-m-d', $request->date),
        ]);

        if ($request->is_located == 1) {
            $measurement->fill([
                'height' => $request->height,
                'is_alive' => $request->is_alive == 1,
            ]);
        } else {
            $measurement->fill([
                'height' => null,
                'is_alive' => null,
            ]);
        }

        $measurement->save();

        $measurement->plot->setLastMeasuredAt($measurement);

        $this->with($measurement);

        return $this->created($measurement);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Measurement $measurement
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Measurement $measurement)
    {
        $this->authorize('delete', $measurement);

        $measurement->delete();

        return $this->deleted('Measurement record deleted successfully');
    }
}
