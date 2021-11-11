<template>
    <div class="container">
        <div class="card">
            <div class="row buttons mb-2 mx-0">
                <div class="col-md-6 py-1">
                    <div class="btn bg-secondary text-light p-2 disabled">
                        <h5>км в литры</h5> 
                    </div>
                </div>
                <div class="col-md-6 py-1">
                    <div class="btn bg-primary text-white p-2" @click="$router.push('/liters-to-kms')">
                        <h5>литры в км</h5> 
                    </div>
                </div>
            </div>
            <hr class="mt-0"> 

            <div class="row">
                <div class="col-md-2">
                    <button @click.prevent="reset()" class="btn-reset px-2 py-0 rounded"><small>сброс</small></button>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-12">
                    <h4 class="text-center">Километры в литры</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div v-if="!error" class="form-group">
                        <label><small>Пройдено км</small></label>
                        <input v-model="kms_past" type="number" class="form-control" required>
                        <a href="#" @click="helper_is_active = true"><small>вычислить пробег</small></a>
                    </div>
                </div>
                <div v-if="!error" class="col-md-4">
                    <div class="form-group">
                        <label><small>Норма л/100км</small></label>
                        <input v-model="norm" type="number" class="form-control" required>
                    </div>
                </div>
                <div v-if="!error" class="col-md-4">
                    <div class="form-group text-center my-2">
                        <button class="py-3 rounded btn-compute" @click.prevent="getLiters()">Расчитать</button>
                    </div>
                </div>
            </div>

                            <!-- help -->
            <div v-if="helper_is_active" class="row mb-3 bg-info">
                <div class="col-md-4">
                    <div class="form-group">
                        <label><small>Выезд, км</small></label>
                        <input v-model="start" type="number" class="form-control" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label><small>Возвращение, км</small></label>
                        <input v-model="finish" type="number" class="form-control" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group text-center my-2">
                        <button class="py-3 rounded btn-compute" @click.prevent="getDist()">Получить пробег</button>
                    </div>
                </div>
            </div> 
            <div class="row px-3">
                <div class="col-md-12">
                    <div v-if="res_liters" class="col-md-12 text-center bg-light rounded p-3" :class="{'hidden': error}">
                        <h4 class="text-secondary">Израсходовано <b class="text-danger">{{ Math.round(res_liters) }}</b> литров</h4>
                    </div>            
                    <div v-if="error" class="alert text-center alert-danger" role="alert">
                    <h5>{{ error }}</h5> 
                    </div>
                </div>

            </div>
            <div class="row px-3">
                <div class="col-md-12 rounded p-3">
                    <ul class="list-group">
                        <li v-for="(note, index) in notes" :key="index" class="list-group-item">
                            <b>{{ note.kms_past }}</b> <small>км</small> <i>по норме</i> <b>{{ note.norm }}</b><small> л/100км </small> ==> <b> {{ note.res_liters }} </b> <small>л</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KmsToLiters',
    data() {
        return {
            helper_is_active: false,
            start: '',
            finish: '',
            kms_past: '',
            norm: '',
            res_liters: '',
            kms_to_liters: [],
            notes: [],
            error: ''
        }
    },
    methods: {
        getDist() {
            this.kms_past = this.finish - this.start
            this.helper_is_active = false

        },
        getLiters() {
            if (this.kms_past > 0 && this.norm > 0) {
                this.res_liters = this.kms_past / 100 * this.norm;
                this.notes.unshift({
                    kms_past: this.kms_past,
                    norm: this.norm,
                    res_liters: Math.round(this.res_liters)
                })
            } else {
                this.error = 'Числа должны быть больше 0!'
            }
        },
        reset() {
            this.kms_past = ''
            this.norm = ''
            this.res_liters = ''
            this.notes = []
            this.error = ''
        }
    }
}
</script>

<style scoped>
.card {
    margin: 0 auto;
    padding: 5px 20px 20px 20px;
    max-width: 600px;
    border: black 1px solid;
    background-color: rgb(128, 206, 173);
    border-radius: 5px;
}
.btn-compute {
    height: 100%;
    width: 100%;
}

li {
    border: none;
    background-color: rgb(128, 206, 173);
}

.buttons {
    margin: 0 auto;
}
.btn {
    width: 100%;
    height: 100%;
}
</style>