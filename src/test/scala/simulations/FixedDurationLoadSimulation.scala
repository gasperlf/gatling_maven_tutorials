package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class FixedDurationLoadSimulation extends Simulation {

  //http config
  val httpConfig = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  def getAllUsersRequest(): ChainBuilder = {
    repeat(2) {
      exec(http("get all users request")
        .get("/api/users?page=2")
        .check(status is 200)
      )
    }
  }

  def getSingleUserRequest(): ChainBuilder = {
    repeat(2) {
      exec(http("get single user request")
        .get("/api/users/2")
        .check(status is 200)
      )
    }
  }

  def addUser(): ChainBuilder = {
    repeat(2) {
      exec(http("add user request")
        .post("/api/users")
        .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
        .check(status is 201)
      )
    }
  }

  //scenario config
  val scn = scenario("Fixed duration simulation")
    .forever() {
      exec(getAllUsersRequest())
        .pause(2)
        .exec(getSingleUserRequest())
        .pause(2)
        .exec(addUser())
    }

  //execute scenario
  setUp(scn.inject(
    nothingFor(5),
    atOnceUsers(10),
    rampUsers(50) during (30 seconds)
  )).protocols(httpConfig)
    .maxDuration(1 minute)
}
