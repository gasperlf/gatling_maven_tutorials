package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class TestApiSimulation extends Simulation {

  //http config
  val httpConfig = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  //scenario config
  val scn = scenario("get user")
    .exec(http("get user request")
    .get("/api/users/2")
    .check(status is 200))

  //execute scenario
  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConfig)
}
