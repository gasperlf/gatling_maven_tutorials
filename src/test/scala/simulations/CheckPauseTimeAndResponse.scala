package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class CheckPauseTimeAndResponse extends Simulation {

  //http config
  val httpConfig = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  //scenario config
  val scn = scenario("user api calls")
    .exec(http("list all user")
      .get("/api/users?page=2")
      .check(status is 200))
    .pause(5)

  exec(http("single user api")
    .get("/api/users/23")
//    .check(status.in(200 to 210))
    .check(status.not(400), status.not(500))
  )
    .pause(300.milliseconds)

  //execute scenario
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

}
